---
name: I_TRADEFINANCECATEGORYTEXT
description: "Tradefinancecategorytext"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-TRM
  - interface-view
  - text-view
  - text
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_TRADEFINANCECATEGORYTEXT

**Tradefinancecategorytext**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TradeFinanceCategory` | ✓ | |  | `cast(DomainText.domvalue_l as ftr_tf_cat)` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `TradeFinanceCategoryName` |  | |  | `cast( DomainText.ddtext as trade_finance_category_name preserving type )` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ITRDFINCATT'
@AbapCatalog.compiler.compareFilter: true
@EndUserText.label: 'Trade Finance Category - Text'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@ObjectModel:{
    dataCategory: #TEXT,
    usageType : {
        sizeCategory: #S,
        serviceQuality: #A,
        dataClass: #MASTER
    },
    representativeKey:'TradeFinanceCategory',
    modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
    supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE]
    
}
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations: true // For C1-Release 
@ObjectModel.sapObjectNodeType.name: 'TradeFinanceCategoryText'

define view I_TradeFinanceCategoryText
  as select from dd07t as DomainText 
  association [0..1] to I_Language  as _Language on $projection.Language = _Language.Language
{ 
      @ObjectModel.text.element: 'TradeFinanceCategoryName'
  key cast(DomainText.domvalue_l as ftr_tf_cat) as TradeFinanceCategory,
  
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key DomainText.ddlanguage                     as Language,
  
      @Semantics.text: true
      cast( DomainText.ddtext as trade_finance_category_name preserving type )
                                                as TradeFinanceCategoryName,
      
      _Language
}
where
      DomainText.domname  = 'FTR_TF_CAT'
  and DomainText.as4local = 'A'
```
