---
name: I_CNSLDTNINVESTMENTMETHODTEXT
description: "Cnsldtninvestmentmethodtext"
app_component: FIN-CS-MD-2CL
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
  - FIN-CS
  - FIN-CS-MD
  - interface-view
  - text-view
  - text
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNINVESTMENTMETHODTEXT

**Cnsldtninvestmentmethodtext**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
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
| `Language` | ✓ | |  | `cast(_Text.langu as fincs_language preserving type )` |  |  |
| `ConsolidationInvestmentMethod` | ✓ | |  | `cast(_Text.cmeth as fincs_investmentmethod preserving type )` |  |  |
| `CnsldtnInvestmentMethodText` |  | |  | `cast (_Text.txt as fincs_investmentmethodtext preserving type)` |  |  |
| `_Language` | | ✓ | | | | |
| `_CnsldtnInvestmentMethod` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1..1] |
| `_CnsldtnInvestmentMethod` | `I_CnsldtnInvestmentMethod` | [1..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSINVMETHODT',
  compiler.compareFilter: true,
  preserveKey: true
}
@Analytics: {
  dataExtraction.enabled: true
}
@AccessControl:{
  authorizationCheck: #MANDATORY
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel:{
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #M
  },
  representativeKey: 'ConsolidationInvestmentMethod',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                           #CDS_MODELING_ASSOCIATION_TARGET,
                           #SQL_DATA_SOURCE,
                           #EXTRACTION_DATA_SOURCE,
                           #LANGUAGE_DEPENDENT_TEXT ]
}
@Search.searchable: true
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Consolidation Investment Method - Text'

define view I_CnsldtnInvestmentMethodText
  as select from tf551 as _Text

    inner join   tf600 as _tf600 on  _Text.dimen = _tf600.dimen
                                 and _Text.cmeth = _tf600.coimeth

  association [1..1] to I_Language                as _Language         on $projection.Language = _Language.Language

  association [1..1] to I_CnsldtnInvestmentMethod as _CnsldtnInvestmentMethod on $projection.ConsolidationInvestmentMethod = _CnsldtnInvestmentMethod.ConsolidationInvestmentMethod
  
{

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key cast(_Text.langu as fincs_language preserving type )           as Language,

      @ObjectModel.foreignKey.association: '_CnsldtnInvestmentMethod'
  key cast(_Text.cmeth as fincs_investmentmethod preserving type )   as ConsolidationInvestmentMethod,

      @Semantics.text
      @Search: { defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.7 }
      cast (_Text.txt as fincs_investmentmethodtext preserving type) as CnsldtnInvestmentMethodText,

      _Language,
      _CnsldtnInvestmentMethod
}
where
  _Text.dimen = 'Y1'
```
