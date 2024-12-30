let remaining = [...this];
this.length = 0;
this.push(...remaining.slice(1));
this.unshift(remaining[0]);
