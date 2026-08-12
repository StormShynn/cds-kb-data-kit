---
name: I_BUSVOLFLDCOMBNTYPEFLDASSGMT
description: "This CDS view is for the assignment of field names to Business Volume Field Combination type."
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
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
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
