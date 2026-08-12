---
name: I_SUPDMNDALLDOCRQMTTYPE
description: "Requirement Type for All Documents"
app_component: LO-RFM-ARN
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPDMNDALLDOCRQMTTYPE')/$value
semantic_en: "Requirement Type for All Documents"
semantic_vi: "Requirement Type for All Documents — CDS view cơ bản dựa trên dd07v."
keywords:
  - "requirement"
  - "type"
  - "for"
  - "all"
  - "documents"
  - "name"
tags:
  - LO
  - component:LO-RFM-ARN
  - document
  - interface-view
  - LO-RFM
  - LO-RFM-ARN
  - lob:logistics general
---
# I_SUPDMNDALLDOCRQMTTYPE

**Requirement Type for All Documents**

| Property | Value |
|---|---|
| App Component | `LO-RFM-ARN` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPDMNDALLDOCRQMTTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RequirementType` | ✓ | |  | `cast( dd07v.domvalue_l as pph_bdart )` | `CHAR(2)` | Requirement Type |
| `RequirementTypeName` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SupDmndAllDocRqmtTypeT` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPDMNDALLDOCRQMTTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPDMNDALLDOCRQMTTYPE')/$value)*

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
  sqlViewName: 'ISUPDMNDADRQMT',
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
   representativeKey: 'RequirementType',
   supportedCapabilities: [#ANALYTICAL_DIMENSION, 
                           #CDS_MODELING_ASSOCIATION_TARGET, 
                           #CDS_MODELING_DATA_SOURCE,
                           #SQL_DATA_SOURCE],
   modelingPattern: #ANALYTICAL_DIMENSION
}
@Metadata.ignorePropagatedAnnotations:true
@EndUserText.label: 'Requirement Type for All Documents'
define view I_SupDmndAllDocRqmtType
  as select from dd07v
  association [0..*] to I_SupDmndAllDocRqmtTypeT as _Text on $projection.RequirementType = _Text.RequirementType

{
      @ObjectModel.text.association: '_Text'
  key cast( dd07v.domvalue_l as pph_bdart ) as RequirementType,
      ddtext           as RequirementTypeName,
      _Text
}

where

      domname    = 'ARUN_SDO_ALLDOC_REQMT_TYPE'
  and ddlanguage = $session.system_language
```
