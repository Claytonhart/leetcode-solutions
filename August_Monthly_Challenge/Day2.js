var MyHashSet = function() {
    this.hashset = {};
};

MyHashSet.prototype.add = function(key) {
    this.hashset[key] = true;
};

MyHashSet.prototype.remove = function(key) {
    delete this.hashset[key];
};

MyHashSet.prototype.contains = function(key) {
    return this.hashset[key] || false;
};