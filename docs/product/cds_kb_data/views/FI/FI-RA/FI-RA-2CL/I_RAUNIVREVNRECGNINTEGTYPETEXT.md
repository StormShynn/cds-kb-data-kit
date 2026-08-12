---
name: I_RAUNIVREVNRECGNINTEGTYPETEXT
description: "Revenue Accounting URR Type - Text"
app_component: FI-RA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RAUNIVREVNRECGNINTEGTYPETEXT')/$value
semantic_en: "Revenue Accounting URR Type - Text"
semantic_vi: "Revenue Accounting URR Type - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "revenue"
  - "accounting"
  - "urr"
  - "type"
  - "text"
  - "language"
  - "univ"
  - "revn"
  - "recgn"
  - "integ"
  - "domain"
  - "value"
  - "name"
tags:
  - FI
  - account
  - component:FI-RA-2CL
  - FI-RA
  - FI-RA-2CL
  - interface-view
  - lob:finance
---
# I_RAUNIVREVNRECGNINTEGTYPETEXT

**Revenue Accounting URR Type - Text**

| Property | Value |
|---|---|
| App Component | `FI-RA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RAUNIVREVNRECGNINTEGTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast(dd07t.ddlanguage as spras preserving type)` | `LANG(1)` | Language Key |
| `RAUnivRevnRecgnIntegType` | ✓ | |  | `cast(dd07t.domvalue_l as farr_cds_ebrr_integ_type)` | `CHAR(1)` | URR Integration Type |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `RAUnivRevnRecgnIntegTypeName` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_Language` | | ✓ | | | | |
| `_RAUnivRevnRecgnIntegType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RAUNIVREVNRECGNINTEGTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RAUNIVREVNRECGNINTEGTYPETEXT')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [ #NONE ]

@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics.technicalName: 'IRAURRTYPETXT'

@EndUserText.label: 'Revenue Accounting URR Type - Text'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'RAUnivRevnRecgnIntegType'

@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #LANGUAGE_DEPENDENT_TEXT,
                                      #SEARCHABLE_ENTITY,
                                      #SQL_DATA_SOURCE ]

@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #META }

@Search.searchable: true

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_RAUnivRevnRecgnIntegTypeText
  as select from dd07t

  association        to parent I_RAUnivRevnRecgnIntegType as _RAUnivRevnRecgnIntegType
    on $projection.RAUnivRevnRecgnIntegType = _RAUnivRevnRecgnIntegType.RAUnivRevnRecgnIntegType

  association [0..1] to I_Language                        as _Language
    on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast(dd07t.ddlanguage as spras preserving type)    as Language,

      @ObjectModel.foreignKey.association: '_RAUnivRevnRecgnIntegType'
      @ObjectModel.text.element: [ 'RAUnivRevnRecgnIntegTypeName' ]
  key cast(dd07t.domvalue_l as farr_cds_ebrr_integ_type) as RAUnivRevnRecgnIntegType,

      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                   as DomainValue,

      @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8, ranking: #LOW }
      @Semantics.text: true
      dd07t.ddtext                                       as RAUnivRevnRecgnIntegTypeName,

      _RAUnivRevnRecgnIntegType,
      _Language

}
where dd07t.domname  = 'FARR_EBRR_INTEG_TYPE'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
