---
name: I_ACCTASSIGNMENTCATEGORYTEXT
description: "Acctassignmentcategorytext"
app_component: MM
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - interface-view
  - text-view
  - text
  - component:MM
  - lob:Sourcing & Procurement
---
# I_ACCTASSIGNMENTCATEGORYTEXT

**Acctassignmentcategorytext**

| Property | Value |
|---|---|
| App Component | `MM` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AccountAssignmentCategory` | ✓ | |  | `knttp` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `AcctAssignmentCategoryName` |  | |  | `knttx` |  |  |
| `_Language` | | ✓ | | | | |
| `_AccountAssignmentCat` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@ObjectModel.dataCategory: #TEXT 
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.representativeKey: 'AccountAssignmentCategory'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A 
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SEARCHABLE_ENTITY, #LANGUAGE_DEPENDENT_TEXT ]
@EndUserText.label: 'Account Assignment Category - Text' 
//Commented by VDM CDS Suite Plugin:@Analytics.dataCategory: #TEXT
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #NOT_REQUIRED 
@AbapCatalog.sqlViewName: 'IMMACCTASSCATT'
@Search.searchable: true
//Commented by VDM CDS Suite Plugin:@ObjectModel.representativeKey: 'AccountAssignmentCategory'

define view I_AcctAssignmentCategoryText //must start with 'I_' and end with 'Text' or 'T'
   as select from t163i
   association to parent I_AccountAssignmentCategory as _AccountAssignmentCat 
    on $projection.AccountAssignmentCategory = _AccountAssignmentCat.AccountAssignmentCategory
   association [0..1] to I_Language as _Language  on $projection.Language = _Language.Language
{
   key knttp as AccountAssignmentCategory,
   @Semantics.language: true
   key spras as Language,
   @Search.defaultSearchElement: true
   @Search.fuzzinessThreshold: 0.8
   @Search.ranking: #HIGH
   @Semantics.text: true
   @EndUserText.label: 'Acct Assgnt. Cat. Desc.'   
    t163i.knttx as AcctAssignmentCategoryName, 
   _AccountAssignmentCat,
   _Language
   
}
```
