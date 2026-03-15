# Buggy behavior in data.table.
# Upshot: don't change type of a sort column in data.table without manually re-sorting.
# My opinion: data.table should drop the sorted attribute on type changes for you.

library(data.table)

N = 200
x = data.table(Id = 1:N, Date=as.POSIXct(seq(from=Sys.Date(), length.out=N, by="+1 day")))
setkeyv(x, c("Id", "Date"))
x[["Id"]] = as.character(x[["Id"]])     # <-- this is a problem for data.table!
setkeyv(x, c("Id", "Date"))             # <-- this, surprisingly, does not fix the problem :(
# setkey(x, NULL)                       # <-- this does fix things up though :/

y = x[,c("Id", "Date"),with=FALSE]
setkeyv(y, c("Id", "Date"))

x = head(x)

cat("Merge as data.tables...\n")
print(merge(x, y, by="Id", all.x=TRUE))

# versus
cat("Merge same data as data.frames...\n")
print(merge(as.data.frame(x), as.data.frame(y), by="Id", all.x=TRUE))

