---
name: I_SUPDMNDALLDOCRQMTTYPET
description: "Requirement Types - Text"
app_component: LO-RFM-ARN
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPDMNDALLDOCRQMTTYPET')/$value
semantic_en: "Requirement Types - Text"
semantic_vi: "Requirement Types - Text — CDS view cơ bản dựa trên dd07t."
keywords:
  - "requirement"
  - "types"
  - "text"
  - "type"
  - "language"
  - "name"
tags:
  - LO
  - component:LO-RFM-ARN
  - interface-view
  - LO-RFM
  - LO-RFM-ARN
  - lob:logistics general
---
# I_SUPDMNDALLDOCRQMTTYPET

**Requirement Types - Text**

| Property | Value |
|---|---|
| App Component | `LO-RFM-ARN` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPDMNDALLDOCRQMTTYPET')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RequirementType` | ✓ | |  | `cast( dd07t.domvalue_l as pph_bdart )` | `CHAR(2)` | Requirement Type |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `RequirementTypeName` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_SupDmndAllDocRqmtType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SupDmndAllDocRqmtType` | `I_SupDmndAllDocRqmtType` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPDMNDALLDOCRQMTTYPET')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPDMNDALLDOCRQMTTYPET')/$value)*

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
  sqlViewName: 'ISUPDMNDADRQMTT',
  compiler.compareFilter: true,
  preserveKey: true
 }
@Analytics: {
  dataExtraction.enabled: true
}
@ObjectModel: {
   dataCategory: #TEXT,
   usageType: {
     dataClass:      #META,
     serviceQuality: #A,
     sizeCategory:   #S
   },
   representativeKey: 'RequirementType',
   supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, 
                           #CDS_MODELING_DATA_SOURCE,
                           #LANGUAGE_DEPENDENT_TEXT,
                           #SEARCHABLE_ENTITY,
                           #SQL_DATA_SOURCE],
   modelingPattern: #LANGUAGE_DEPENDENT_TEXT
}
@Metadata.ignorePropagatedAnnotations:true
@EndUserText.label: 'Requirement Types - Text'
define view I_SupDmndAllDocRqmtTypeT
  as select from dd07t
  association [0..1] to I_SupDmndAllDocRqmtType as _SupDmndAllDocRqmtType on $projection.RequirementType = _SupDmndAllDocRqmtType.RequirementType
  association [0..1] to I_Language              as _Language              on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_SupDmndAllDocRqmtType'
  key cast( dd07t.domvalue_l as pph_bdart ) as RequirementType,

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage       as Language,
      @EndUserText.label: 'Demand Type Description'
      @Semantics.text: true
      ddtext           as RequirementTypeName,

      //Associations
      _SupDmndAllDocRqmtType,
      _Language
}
where
  (
        domname    = 'ARUN_SDO_ALLDOC_REQMT_TYPE'
    and ddlanguage = $session.system_language
  )
  and(
        as4local   = 'A'
  );
```
