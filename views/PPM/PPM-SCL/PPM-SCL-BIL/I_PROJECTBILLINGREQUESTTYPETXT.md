---
name: I_PROJECTBILLINGREQUESTTYPETXT
description: Projectbillingrequesttypetxt
app_component: PPM-SCL-BIL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PPM
  - PPM-SCL
  - PPM-SCL-BIL
  - interface-view
  - billing
  - project
  - component:PPM-SCL-BIL
  - lob:Other
  - bo:Project
---
# I_PROJECTBILLINGREQUESTTYPETXT

**Projectbillingrequesttypetxt**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-BIL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Language` | `cast( ddlanguage as spras preserving type )` |
| key `ProjectBillingRequestType` | `cast( substring( domvalue_l, 1, 4 ) as pbr_doc_type preserving type )` |
| `DomainValue` | `domvalue_l` |
| `ProjectBillingRequestTypeTxt` | `ddtext` |
| `_Language` | *Association* |
| `_ProjectBillingRequestType` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@Analytics.technicalName: 'IPBREQTYPETXT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Project Billing Request Document Type - Text'
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true

@ObjectModel.dataCategory: #TEXT
@ObjectModel.usageType: {
    serviceQuality: #A,
    sizeCategory: #S,
    dataClass: #META
}

@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'ProjectBillingRequestType'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

define view entity I_ProjectBillingRequestTypeTxt
  as select from dd07t
  association        to parent I_ProjectBillingRequestType as _ProjectBillingRequestType on $projection.ProjectBillingRequestType = _ProjectBillingRequestType.ProjectBillingRequestType
  association [0..1] to I_Language                         as _Language                  on $projection.Language = _Language.Language
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast( ddlanguage as spras preserving type )                           as Language,

      @ObjectModel.foreignKey.association: '_ProjectBillingRequestType'
      @ObjectModel.text.element: ['ProjectBillingRequestTypeTxt']
  key cast( substring( domvalue_l, 1, 4 ) as pbr_doc_type preserving type ) as ProjectBillingRequestType,

      @Analytics.hidden: true
      @Consumption.hidden: true
      domvalue_l                                                            as DomainValue,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      ddtext                                                                as ProjectBillingRequestTypeTxt,

      _ProjectBillingRequestType,
      _Language

 
}
where
      domname  = 'PBR_DOC_TYPE'
  and as4local = 'A'

//@AbapCatalog.sqlViewName: ''
//@AbapCatalog.compiler.compareFilter: true
//@AbapCatalog.preserveKey: true
//@AccessControl.authorizationCheck: #NOT_REQUIRED
//@EndUserText.label: 'Project Billing Request Document Type Text'
//define view I_PrjBlgReqTypeText as select from data_source_name
//{
//
//}
```
