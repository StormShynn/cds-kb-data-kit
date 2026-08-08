---
name: ZBOOK.DDLS
description: "Bookings from SBOOK"
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://github.com/michaelnicholls/zdemo_stuff/blob/27e4950e605793296714c4035c8cbc1227bf29e9/src/zbook.ddls.asddls
semantic_en: "Bookings from SBOOK — CDS view based on sbook."
semantic_vi: "Bookings from SBOOK — CDS view dựa trên sbook."
keywords:
  - "bookings"
  - "from"
  - "sbook"
  - "carrid"
  - "connid"
  - "fldate"
  - "bookid"
  - "customid"
---
# ZBOOK.DDLS

**Bookings from SBOOK**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://github.com/michaelnicholls/zdemo_stuff/blob/27e4950e605793296714c4035c8cbc1227bf29e9/src/zbook.ddls.asddls) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Carrid` | ✓ | |  | `carrid` |  |  |
| `Connid` | ✓ | |  | `connid` |  |  |
| `Fldate` | ✓ | |  | `fldate` |  |  |
| `Bookid` | ✓ | |  | `bookid` |  |  |
| `Customid` |  | |  | `customid` |  |  |
| `Custtype` |  | |  | `custtype` |  |  |
| `Smoker` |  | |  | `smoker` |  |  |
| `Luggweight` |  | |  | `luggweight` |  |  |
| `Wunit` |  | |  | `wunit` |  |  |
| `Invoice` |  | |  | `invoice` |  |  |
| `Class` |  | |  | `class` |  |  |
| `Forcuram` |  | |  | `forcuram` |  |  |
| `Forcurkey` |  | |  | `forcurkey` |  |  |
| `Loccuram` |  | |  | `loccuram` |  |  |
| `Loccurkey` |  | |  | `loccurkey` |  |  |
| `OrderDate` |  | |  | `order_date` |  |  |
| `Counter` |  | |  | `counter` |  |  |
| `Agencynum` |  | |  | `agencynum` |  |  |
| `Cancelled` |  | |  | `cancelled` |  |  |
| `Reserved` |  | |  | `reserved` |  |  |
| `Passname` |  | |  | `passname` |  |  |
| `Passform` |  | |  | `passform` |  |  |
| `Passbirth` |  | |  | `passbirth` |  |  |

## Source Code

*Source: [https://github.com/michaelnicholls/zdemo_stuff/blob/27e4950e605793296714c4035c8cbc1227bf29e9/src/zbook.ddls.asddls](https://github.com/michaelnicholls/zdemo_stuff/blob/27e4950e605793296714c4035c8cbc1227bf29e9/src/zbook.ddls.asddls)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Bookings from SBOOK'
@Metadata.ignorePropagatedAnnotations: false
define root view entity ZBOOK as select from sbook
{
    key carrid as Carrid,
    key connid as Connid,
    key fldate as Fldate,
    key bookid as Bookid,
    customid as Customid,
    custtype as Custtype,
    smoker as Smoker,
    luggweight as Luggweight,
    wunit as Wunit,
    invoice as Invoice,
    class as Class,
    forcuram as Forcuram,
    forcurkey as Forcurkey,
    loccuram as Loccuram,
    loccurkey as Loccurkey,
    order_date as OrderDate,
    counter as Counter,
    agencynum as Agencynum,
    cancelled as Cancelled,
    reserved as Reserved,
    passname as Passname,
    passform as Passform,
    passbirth as Passbirth
}
```
