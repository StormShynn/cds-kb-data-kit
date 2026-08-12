---
name: I_PROJECTBILLINGREQSTATUSTEXT
description: "Projectbillingreqstatustext"
app_component: PPM-SCL-BIL
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
  - PPM
  - PPM-SCL
  - PPM-SCL-BIL
  - interface-view
  - text-view
  - billing
  - project
  - text
  - status
  - component:PPM-SCL-BIL
  - lob:Other
  - bo:Project
---
# I_PROJECTBILLINGREQSTATUSTEXT

**Projectbillingreqstatustext**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-BIL` |
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
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` |  |  |
| `ProjectBillingRequestStatus` | ✓ | |  | `cast( substring( domvalue_l, 1, 1 ) as pbr_doc_status preserving type )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `ProjectBillingReqStatusText` |  | |  | `ddtext` |  |  |
| `_Language` | | ✓ | | | | |
| `_ProjectBillingRequestStatus` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Project Billing Request Status - Text'
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.dataCategory: #TEXT
@ObjectModel.usageType: {
    serviceQuality: #A,
    sizeCategory: #S,
    dataClass: #META
}
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'ProjectBillingRequestStatus'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     //#EXTRACTION_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]

//@Analytics.dataExtraction.enabled: true
@Analytics.technicalName: 'IPBRSTATUSTXT'

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API


define view entity I_ProjectBillingReqStatusText as select from dd07t
  association to parent I_ProjectBillingRequestStatus as _ProjectBillingRequestStatus
    on $projection.ProjectBillingRequestStatus = _ProjectBillingRequestStatus.ProjectBillingRequestStatus
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{  

       @ObjectModel.foreignKey.association: '_Language'
       @Semantics.language: true
   key cast( dd07t.ddlanguage as spras preserving type ) as Language,
      
       @ObjectModel.foreignKey.association: '_ProjectBillingRequestStatus'
       @ObjectModel.text.element: ['ProjectBillingReqStatusText']
   key cast( substring( domvalue_l, 1, 1 ) as pbr_doc_status preserving type ) as ProjectBillingRequestStatus,
   
       @Analytics.hidden: true
       @Consumption.hidden: true
       dd07t.domvalue_l as DomainValue,
           
       @Semantics.text: true
       @Search.defaultSearchElement: true
       @Search.ranking: #LOW
       @Search.fuzzinessThreshold: 0.8
       ddtext as ProjectBillingReqStatusText,  
       
       _ProjectBillingRequestStatus, 
       _Language

} where domname = 'PBR_STATUS' and as4local = 'A'
```
