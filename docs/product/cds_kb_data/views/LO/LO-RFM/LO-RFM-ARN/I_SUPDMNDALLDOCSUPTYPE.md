---
name: I_SUPDMNDALLDOCSUPTYPE
description: "Description of Supply Types"
app_component: LO-RFM-ARN
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPDMNDALLDOCSUPTYPE')/$value
semantic_en: "Description of Supply Types"
semantic_vi: "Description of Supply Types — CDS view cơ bản dựa trên dd07v."
keywords:
  - "description"
  - "supply"
  - "types"
  - "assigned"
  - "type"
  - "name"
tags:
  - LO
  - component:LO-RFM-ARN
  - interface-view
  - LO-RFM
  - LO-RFM-ARN
  - lob:logistics general
---
# I_SUPDMNDALLDOCSUPTYPE

**Description of Supply Types**

| Property | Value |
|---|---|
| App Component | `LO-RFM-ARN` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPDMNDALLDOCSUPTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AssignedSupplyType` | ✓ | |  | `cast( dd07v.domvalue_l as arun_bskz )` | `CHAR(1)` | ARun Stock Source |
| `AssignedSupplyTypeName` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SupDmndAllDocSupTypeT` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPDMNDALLDOCSUPTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPDMNDALLDOCSUPTYPE')/$value)*

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@AbapCatalog: {
  sqlViewName: 'ISUPDMNDADSUPT',
  compiler.compareFilter: true,
  preserveKey: true
 }
@Analytics: {
  dataCategory: #DIMENSION,
  internalName:#LOCAL
}
@ObjectModel: {
   usageType: {
     dataClass:      #META,
     serviceQuality: #A,
     sizeCategory:   #S
   },
   representativeKey: 'AssignedSupplyType',
   supportedCapabilities: [#ANALYTICAL_DIMENSION, 
                           #CDS_MODELING_ASSOCIATION_TARGET, 
                           #CDS_MODELING_DATA_SOURCE,
                           #SQL_DATA_SOURCE],
   modelingPattern: #ANALYTICAL_DIMENSION 
}
@Metadata.ignorePropagatedAnnotations:true
@EndUserText.label: 'Description of Supply Types'
define view I_SupDmndAllDocSupType
  as select from dd07v
  association [0..*] to I_SupDmndAllDocSupTypeT as _Text on $projection.AssignedSupplyType = _Text.AssignedSupplyType

{
      @ObjectModel.text.element: ['AssignedSupplyTypeName']
  key cast( dd07v.domvalue_l as arun_bskz ) as AssignedSupplyType,
      ddtext           as AssignedSupplyTypeName,
      _Text
}

where
      domname    = 'ARUN_SDO_ALLDOC_SUPPLY_TYPE'
  and ddlanguage = $session.system_language
```
