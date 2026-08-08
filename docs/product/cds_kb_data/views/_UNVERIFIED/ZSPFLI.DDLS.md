---
name: ZSPFLI.DDLS
description: "spfli"
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://github.com/michaelnicholls/zdemo_stuff/blob/27e4950e605793296714c4035c8cbc1227bf29e9/src/zspfli.ddls.asddls
semantic_en: "spfli — CDS view based on spfli."
semantic_vi: "spfli — CDS view dựa trên spfli."
keywords:
  - "spfli"
  - "carrname"
  - "user_default"
  - "countryfr"
  - "cityfrom"
---
# ZSPFLI.DDLS

**spfli**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://github.com/michaelnicholls/zdemo_stuff/blob/27e4950e605793296714c4035c8cbc1227bf29e9/src/zspfli.ddls.asddls) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Carrid` | ✓ | |  | `carrid` |  |  |
| `Connid` | ✓ | |  | `connid` |  |  |
| `carrname` |  | |  |  |  |  |
| `user_default` |  | |  | `cast(case when p.UserParameterValue = c.carrid then 'X' else '' end as boolean)` |  |  |
| `Countryfr` |  | |  | `countryfr` |  |  |
| `Cityfrom` |  | |  | `cityfrom` |  |  |
| `Airpfrom` |  | |  | `airpfrom` |  |  |
| `Countryto` |  | |  | `countryto` |  |  |
| `Cityto` |  | |  | `cityto` |  |  |
| `Airpto` |  | |  | `airpto` |  |  |
| `Deptime` |  | |  | `deptime` |  |  |
| `Arrtime` |  | |  | `arrtime` |  |  |

## Source Code

*Source: [https://github.com/michaelnicholls/zdemo_stuff/blob/27e4950e605793296714c4035c8cbc1227bf29e9/src/zspfli.ddls.asddls](https://github.com/michaelnicholls/zdemo_stuff/blob/27e4950e605793296714c4035c8cbc1227bf29e9/src/zspfli.ddls.asddls)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'spfli'
@Metadata.ignorePropagatedAnnotations: false
define  root view entity zspfli as select from spfli as s join scarr as c on c.carrid = s.carrid
left outer join I_UserParameter_F2200 as p on p.UserParameter = 'CAR'
{
    
    @UI.lineItem: [{position: 10}]
    @UI.selectionField: [{position: 10}]
    
    @Consumption.valueHelpDefinition: [{ entity: {name: 'ZMN_CARRVH', element: 'Carrid'}}]
    key s.carrid as Carrid,
    @UI.lineItem: [{position: 20}]
    key s.connid as Connid,
    c.carrname as carrname,
    @UI.selectionField: [{position: 30}]
    @Consumption.filter.defaultValue: 'X'
    @EndUserText.label: 'Use default carrier'
    cast(case when p.UserParameterValue = c.carrid then 'X' else '' end as boolean) as user_default,
    s.countryfr as Countryfr,
    @UI.lineItem: [{position: 30}]
    s.cityfrom as Cityfrom,
    s.airpfrom as Airpfrom,
    s.countryto as Countryto,
    @UI.lineItem: [{position: 40}]
    s.cityto as Cityto,
    s.airpto as Airpto,
 //   fltime as Fltime,
    s.deptime as Deptime,
    s.arrtime as Arrtime
 
}
```
