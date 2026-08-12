---
name: I_FINANCIALSERVICESBRANCHT
description: "Financialservicesbrancht"
app_component: FIN-IE-FS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-IE
  - FIN-IE-FS
  - interface-view
  - service
  - component:FIN-IE-FS-2CL
  - lob:Other
---
# I_FINANCIALSERVICESBRANCHT

**Financialservicesbrancht**

| Property | Value |
|---|---|
| App Component | `FIN-IE-FS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `langu` |  |  |
| `FinancialServicesBranch` | ✓ | |  | `branch_id` |  |  |
| `FinancialServicesBranchName` |  | |  | `cast(branch_tt as ffs_vdm_branch_tt preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_FinancialServicesBranch` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Financial Services Branch - Text'
@ObjectModel:{
    representativeKey: 'FinancialServicesBranch',
    dataCategory: #TEXT,
    usageType: {
    serviceQuality: #A,
    sizeCategory: #M,
    dataClass: #MASTER
    },
    modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
    supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT,
                            #CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET,
                            #SQL_DATA_SOURCE,
                            #SEARCHABLE_ENTITY]
}
@VDM: {
  viewType:#BASIC,
  lifecycle.contract.type:#PUBLIC_LOCAL_API
}
@Search.searchable: true
@AccessControl.authorizationCheck:#MANDATORY
@Metadata.ignorePropagatedAnnotations: true

define view entity I_FinancialServicesBranchT
  as select from ffs_d_branch_t
  association        to parent I_FinancialServicesBranch as _FinancialServicesBranch on $projection.FinancialServicesBranch = _FinancialServicesBranch.FinancialServicesBranch
  association [0..1] to I_Language                       as _Language                on $projection.Language = _Language.Language

{

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
      @ObjectModel.text.element: ['LanguageName']
  key langu                                as Language,
      @ObjectModel.foreignKey.association: '_FinancialServicesBranch'
      @ObjectModel.text.element: ['FinancialServicesBranchName']
  key branch_id                            as FinancialServicesBranch,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast(branch_tt as ffs_vdm_branch_tt preserving type ) as FinancialServicesBranchName,
      _Language._Text[Language = $session.system_language].LanguageName,

      /* Associations */
      _FinancialServicesBranch,
      _Language

}
```
