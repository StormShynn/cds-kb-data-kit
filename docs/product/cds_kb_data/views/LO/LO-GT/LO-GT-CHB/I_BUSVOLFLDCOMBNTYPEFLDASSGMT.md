---
name: I_BUSVOLFLDCOMBNTYPEFLDASSGMT
description: "This CDS view is for the assignment of field names to Business Volume Field Combination type."
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSVOLFLDCOMBNTYPEFLDASSGMT')/$value
semantic_en: "This CDS view is for the assignment of field names to Business Volume Field Combination type."
semantic_vi: "Bus Vol Field Comb Type Field Assignment — CDS view cơ bản dựa trên R_BusVolFldCombnTypeFldAssgmt."
keywords:
  - "bus"
  - "vol"
  - "field"
  - "comb"
  - "type"
  - "assignment"
  - "combn"
  - "name"
  - "init"
  - "allwd"
tags:
  - LO
  - bo:companycode
  - component:LO-GT-CHB
  - interface-view
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
---
# I_BUSVOLFLDCOMBNTYPEFLDASSGMT

**This CDS view is for the assignment of field names to Business Volume Field Combination type.**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSVOLFLDCOMBNTYPEFLDASSGMT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusVolFieldCombnType` | ✓ | |  |  | `CHAR(4)` | Field Combination for Business Volume Selection |
| `BusVolFldCombnFieldName` | ✓ | |  |  | `CHAR(30)` | CCS: Field of a Field Combination |
| `BusVolFldCombnFldInitIsAllwd` |  | |  |  | `CHAR(1)` | Initial Values allowed |
| `BusVolFldCombnExtFieldName` |  | |  |  | `CHAR(30)` | Map Side Fieldname (Left) |
| `_BusVolFieldCombnType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusVolFieldCombnType` | `I_BusVolFieldCombnType` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSVOLFLDCOMBNTYPEFLDASSGMT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSVOLFLDCOMBNTYPEFLDASSGMT')/$value)*

```abap
@EndUserText.label: 'Bus Vol Field Comb Type Field Assignment'
@AccessControl: {
    authorizationCheck: #NOT_REQUIRED
    }
@ObjectModel: {
    representativeKey: 'BusVolFldCombnFieldName',
    modelingPattern: #ANALYTICAL_DIMENSION,
    supportedCapabilities : [ #ANALYTICAL_DIMENSION,
                              #CDS_MODELING_ASSOCIATION_TARGET,
                              #SQL_DATA_SOURCE,
                              #CDS_MODELING_DATA_SOURCE ],
    usageType: {
      dataClass:      #ORGANIZATIONAL,
      serviceQuality: #A,
      sizeCategory:   #S
      } 
    }
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
    }
@Analytics: {
    dataCategory: #DIMENSION,
    dataExtraction.enabled: false,
    internalName: #LOCAL,
    technicalName: 'IBUSVOLFLDTASG'
    }
@Metadata.ignorePropagatedAnnotations: true

define view entity I_BusVolFldCombnTypeFldAssgmt
  as select from R_BusVolFldCombnTypeFldAssgmt

  association [0..1] to I_BusVolFieldCombnType as _BusVolFieldCombnType on $projection.BusVolFieldCombnType = _BusVolFieldCombnType.BusVolFieldCombnType
{
      @ObjectModel.foreignKey.association: '_BusVolFieldCombnType'
  key BusVolFieldCombnType,
  key BusVolFldCombnFieldName,
      BusVolFldCombnFldInitIsAllwd,
      BusVolFldCombnExtFieldName,

      /* Associations */
      _BusVolFieldCombnType
}
```
