---
name: I_RESVNACCTASSGMTCATEGORYTEXT
description: Resvnacctassgmtcategorytext
app_component: MM-IM-RS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IM
  - MM-IM-RS
  - interface-view
  - text-view
  - text
  - component:MM-IM-RS-2CL
  - lob:Sourcing & Procurement
---
# I_RESVNACCTASSGMTCATEGORYTEXT

**Resvnacctassgmtcategorytext**

| Property | Value |
|---|---|
| App Component | `MM-IM-RS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` |  |  |
| `ResvnAcctAssgmtCategory` | ✓ | |  | `cast( dd07t.domvalue_l as rstyp )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `ResvnAcctAssgmtCategoryName` |  | |  | `cast( dd07t.ddtext as imrs_acct_assgmt_cat_name )` |  |  |
| `_Language` | | ✓ | | | | |
| `_ResvnAcctAssgmtCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IRESVNACCT'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Account Assignment Category - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'ResvnAcctAssgmtCategory'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]
@ObjectModel.sapObjectNodeType.name: 'ResvnAcctAssignmentCategoryTxt'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define view I_ResvnAcctAssgmtCategoryText
  as select from dd07t
  association        to parent I_ResvnAcctAssgmtCategory as _ResvnAcctAssgmtCategory on $projection.ResvnAcctAssgmtCategory = _ResvnAcctAssgmtCategory.ResvnAcctAssgmtCategory
  association [0..1] to I_Language                       as _Language                on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type )  as Language,
      @ObjectModel.foreignKey.association: '_ResvnAcctAssgmtCategory'
      @ObjectModel.text.element: ['ResvnAcctAssgmtCategoryName']
  key cast( dd07t.domvalue_l as rstyp )                  as ResvnAcctAssgmtCategory,
      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                   as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Semantics.text: true
      cast( dd07t.ddtext  as imrs_acct_assgmt_cat_name ) as ResvnAcctAssgmtCategoryName,
      _ResvnAcctAssgmtCategory,
      _Language
}
where
      dd07t.domname  = 'RSTYP'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
