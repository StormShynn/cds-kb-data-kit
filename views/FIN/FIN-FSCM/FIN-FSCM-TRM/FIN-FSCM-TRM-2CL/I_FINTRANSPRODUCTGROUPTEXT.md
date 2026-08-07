---
name: I_FINTRANSPRODUCTGROUPTEXT
description: Fintransproductgrouptext
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-TRM
  - interface-view
  - text-view
  - product
  - text
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_FINTRANSPRODUCTGROUPTEXT

**Fintransproductgrouptext**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinTransProductGroup` | ✓ | |  | `cast(left(DomainText.domvalue_l,4) as ftr_productgroup preserving type )` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `FinTransProductGroupName` |  | |  | `cast(DomainText.ddtext as fin_trans_prod_group_name preserving type )` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ITRANSPRDGRPT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@Analytics.dataExtraction.enabled: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Fin Transaction Product Group - Text'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,  #SQL_DATA_SOURCE,  #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE, #SEARCHABLE_ENTITY ]
@ObjectModel.modelingPattern: [ #LANGUAGE_DEPENDENT_TEXT ]
define view I_FinTransProductGroupText
  as select from dd07t as DomainText
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @ObjectModel.text.element: ['FinTransProductGroupName']
  key cast(left(DomainText.domvalue_l,4) as ftr_productgroup preserving type ) as FinTransProductGroup,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key DomainText.ddlanguage                                                    as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Semantics.text: true
      cast(DomainText.ddtext as fin_trans_prod_group_name preserving type )    as FinTransProductGroupName,

      _Language
}
where
      DomainText.domname  = 'FTR_PRODUCTGROUP'
  and DomainText.as4local = 'A'
  and DomainText.as4vers  = '0000'
```
