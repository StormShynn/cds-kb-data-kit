---
name: I_BUSVOLFLDCOMBNSETTYPEASSGMT
description: "Bus Vol Field Combn Set Type Assignment"
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSVOLFLDCOMBNSETTYPEASSGMT')/$value
semantic_en: "Bus Vol Field Combn Set Type Assignment"
semantic_vi: "Bus Vol Field Combn Set Type Assignment — CDS view cơ bản dựa trên R_BusVolFldCombnSetTypeAssgmt."
keywords:
  - "bus"
  - "vol"
  - "field"
  - "combn"
  - "set"
  - "type"
  - "assignment"
  - "group"
  - "allwd"
  - "sign"
  - "valdty"
tags:
  - LO
  - bo:companycode
  - component:LO-GT-CHB
  - interface-view
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
---
# I_BUSVOLFLDCOMBNSETTYPEASSGMT

**Bus Vol Field Combn Set Type Assignment**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSVOLFLDCOMBNSETTYPEASSGMT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusVolFldCombnSet` | ✓ | |  |  | `CHAR(4)` | Set of Field Combinations |
| `BusVolFieldCombnType` | ✓ | |  |  | `CHAR(4)` | Field Combination for Business Volume Selection |
| `BusVolFldCombnGroup` |  | |  |  | `CHAR(2)` | Field Combination Group for Business Volume Selection |
| `BusVolFldCombnAllwdSign` |  | |  |  | `CHAR(1)` | Including / Excluding Control for BV Selection Criteria |
| `BusVolFldCombnValdtyIsAllwd` |  | |  |  | `CHAR(1)` | Business Volume Base with Validity |
| `BusVolFldCombnMinNrOfEntries` |  | |  |  | `DEC(3)` | Minimum Number of Entries for Field Combination |
| `BusVolFldCombnMaxNrOfEntries` |  | |  |  | `DEC(3)` | Maximum Number of Entries for Field Combination |
| `_BusVolFieldCombnType` | | ✓ | | | | |
| `_BusVolFldCombnSet` | | ✓ | | | | |
| `_BusVolFldCombnAllwdSign` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusVolFieldCombnType` | `I_BusVolFieldCombnType` | [0..1] |
| `_BusVolFldCombnSet` | `I_BusVolFldCombnSet` | [0..1] |
| `_BusVolFldCombnAllwdSign` | `I_BusVolFldCombnAllwdSign` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSVOLFLDCOMBNSETTYPEASSGMT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSVOLFLDCOMBNSETTYPEASSGMT')/$value)*

```abap
@EndUserText.label: 'Bus Vol Field Combn Set Type Assignment'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  representativeKey: 'BusVolFldCombnSet',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities : [ #ANALYTICAL_DIMENSION,
                            #CDS_MODELING_ASSOCIATION_TARGET,
                            #SQL_DATA_SOURCE,
                            #CDS_MODELING_DATA_SOURCE ],
  usageType: {
    dataClass:      #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory:   #S
  } 
}
@VDM: {
  viewType: #BASIC, //Planned to Change to #COMPOSITE
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: false,
  internalName: #LOCAL,
  technicalName: 'IBUSVOLFLDSASG'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

define view entity I_BusVolFldCombnSetTypeAssgmt
  as select from R_BusVolFldCombnSetTypeAssgmt

  association [0..1] to I_BusVolFieldCombnType    as _BusVolFieldCombnType    on $projection.BusVolFieldCombnType = _BusVolFieldCombnType.BusVolFieldCombnType
  association [0..1] to I_BusVolFldCombnSet       as _BusVolFldCombnSet       on $projection.BusVolFldCombnSet = _BusVolFldCombnSet.BusVolFldCombnSet
  association [0..1] to I_BusVolFldCombnAllwdSign as _BusVolFldCombnAllwdSign on $projection.BusVolFldCombnAllwdSign = _BusVolFldCombnAllwdSign.BusVolFldCombnAllwdSign

{
  key BusVolFldCombnSet,
      @ObjectModel.foreignKey.association: '_BusVolFieldCombnType'
  key BusVolFieldCombnType,
      BusVolFldCombnGroup,
      @ObjectModel.foreignKey.association: '_BusVolFldCombnAllwdSign'
      BusVolFldCombnAllwdSign,
      BusVolFldCombnValdtyIsAllwd,
      BusVolFldCombnMinNrOfEntries,
      BusVolFldCombnMaxNrOfEntries,

      /* Associations */
      _BusVolFieldCombnType,
      _BusVolFldCombnSet,
      _BusVolFldCombnAllwdSign

}
```
