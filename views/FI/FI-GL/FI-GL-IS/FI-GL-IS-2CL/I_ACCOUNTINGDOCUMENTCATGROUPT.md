---
name: I_ACCOUNTINGDOCUMENTCATGROUPT
description: Accounting DocumentUMENTCATGROUPT
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - accounting-document
  - document
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_ACCOUNTINGDOCUMENTCATGROUPT

**Accounting DocumentUMENTCATGROUPT**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `AccountingDocumentCatGroup` | ✓ | |  | `cast( dd07t.domvalue_l as fis_bstat_grp )` |
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras )` |
| `AccountingDocumentCatGroupName` |  | |  | `cast(dd07t.ddtext as fis_bstat_grp_name)` |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@EndUserText.label: 'Category Group of Journal Entry - Text'
// @Analytics.dataExtraction.enabled: true
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IFIACCDOCCATGRT' 
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'AccountingDocumentCatGroup'
//@AbapCatalog.buffering.status: #NOT_ALLOWED         
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass:  #MASTER
@ObjectModel.usageType.serviceQuality: #A
@Metadata.ignorePropagatedAnnotations: true  
@AccessControl.authorizationCheck: #NOT_REQUIRED
//@Search.searchable: true

@ObjectModel.modelingPattern:        #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, 
                                     #CDS_MODELING_ASSOCIATION_TARGET, 
                                     #SQL_DATA_SOURCE, 
                                     #CDS_MODELING_DATA_SOURCE]

define view entity I_AccountingDocumentCatGroupT as select from dd07t
association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  
  key cast( dd07t.domvalue_l as fis_bstat_grp ) as AccountingDocumentCatGroup, 
  @ObjectModel.foreignKey.association: '_Language'
  @Semantics.language: true
  key cast( dd07t.ddlanguage as spras ) as Language, 
  @Semantics.text: true
//  @Search.defaultSearchElement: true
//  @Search.fuzzinessThreshold: 0.8  
  cast(dd07t.ddtext as fis_bstat_grp_name) as AccountingDocumentCatGroupName,
  _Language
}  

where dd07t.domname = 'FIS_BSTAT_GRP' and dd07t.as4local = 'A';
```
