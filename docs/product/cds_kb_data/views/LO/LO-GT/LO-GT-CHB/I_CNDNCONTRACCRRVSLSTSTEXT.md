---
name: I_CNDNCONTRACCRRVSLSTSTEXT
description: "This CDS view exposes fixed values of the Condition Contract Accrual Reversal Status field."
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRACCRRVSLSTSTEXT')/$value
semantic_en: "This CDS view exposes fixed values of the Condition Contract Accrual Reversal Status field."
semantic_vi: "Condition Contract Accr Rvsl Sts - Text — CDS view cơ bản dựa trên dd07t."
keywords:
  - "condition"
  - "contract"
  - "accr"
  - "rvsl"
  - "sts"
  - "text"
  - "cndn"
  - "contr"
  - "language"
  - "name"
  - "domain"
  - "value"
tags:
  - LO
  - bo:companycode
  - component:LO-GT-CHB
  - contract
  - interface-view
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
---
# I_CNDNCONTRACCRRVSLSTSTEXT

**This CDS view exposes fixed values of the Condition Contract Accrual Reversal Status field.**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRACCRRVSLSTSTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CndnContrAccrRvslSts` | ✓ | |  | `cast( dd07t.domvalue_l as wb2_accruals_reversal_status )` | `CHAR(1)` | Status of Accruals Reversal for a Condition Contract |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `CndnContrAccrRvslStsName` |  | |  | `cast( dd07t.ddtext as wb2_accruals_reversal_status_t preserving type )` | `CHAR(60)` | Description of Accruals Reversal Status Category |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Language` | | ✓ | | | | |
| `_CndnContrAccrRvslSts` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRACCRRVSLSTSTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRACCRRVSLSTSTEXT')/$value)*

```abap
@EndUserText.label: 'Condition Contract Accr Rvsl Sts - Text'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'CndnContrAccrRvslSts',
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT,
                          #SQL_DATA_SOURCE,
                          #CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SEARCHABLE_ENTITY],
  usageType: {
    dataClass:      #META,
    serviceQuality: #A,
    sizeCategory:   #S
  }
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Search.searchable: true
@Analytics: {
  internalName: #LOCAL,
  technicalName: 'IWCBACCRREVSTST'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_CndnContrAccrRvslStsText
  as select from dd07t

  association        to parent I_CndnContrAccrRvslSts as _CndnContrAccrRvslSts on $projection.CndnContrAccrRvslSts = _CndnContrAccrRvslSts.CndnContrAccrRvslSts
  association [0..1] to I_Language                    as _Language             on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_CndnContrAccrRvslSts'
      @ObjectModel.text.element: ['CndnContrAccrRvslStsName']
  key cast( dd07t.domvalue_l as wb2_accruals_reversal_status )                       as CndnContrAccrRvslSts,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key dd07t.ddlanguage                                                               as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as wb2_accruals_reversal_status_t preserving type )                    as CndnContrAccrRvslStsName,
      @Consumption.hidden: true
      dd07t.domvalue_l                                                                          as DomainValue,

      /* Associations */
      _CndnContrAccrRvslSts,
      _Language
}

where
      dd07t.domname  = 'WB2_ACCRUALS_REVERSAL_STATUS'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
