---
name: I_PROJECTBILLINGREQUESTSTATUS
description: "Projectbillingrequeststatus"
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
  - billing
  - project
  - status
  - component:PPM-SCL-BIL
  - lob:Other
  - bo:Project
---
# I_PROJECTBILLINGREQUESTSTATUS

**Projectbillingrequeststatus**

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
| `ProjectBillingRequestStatus` | ✓ | |  | `cast( substring( domvalue_l, 1, 1 ) as pbr_doc_status preserving type )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_ProjectBillingReqStatusText` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Project Billing Request Status'
@Search.searchable: true
@Analytics.dataExtraction.enabled: true
@Analytics.technicalName: 'IPBRSTATUS'
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@ObjectModel.sapObjectNodeType.name: 'ProjectBillingRequestStatus'
@ObjectModel.representativeKey: 'ProjectBillingRequestStatus'
@ObjectModel.usageType: {
    serviceQuality: #A,
    sizeCategory: #S, 
    dataClass: #META  
}
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, 
                                     #CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE, 
                                     #VALUE_HELP_PROVIDER]
@ObjectModel.dataCategory: #VALUE_HELP                                    
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

@Metadata.ignorePropagatedAnnotations: true


define root view entity I_ProjectBillingRequestStatus as select from dd07l
  composition [0..*] of I_ProjectBillingReqStatusText as _ProjectBillingReqStatusText
{
      
       @ObjectModel.text.association: '_ProjectBillingReqStatusText'
   key cast( substring( domvalue_l, 1, 1 ) as pbr_doc_status preserving type ) as ProjectBillingRequestStatus,
  
       @Search.defaultSearchElement: true
       @Search.fuzzinessThreshold: 0.8
       @Search.ranking: #HIGH
       @Analytics.hidden: true
       @Consumption.hidden: true
       dd07l.domvalue_l as DomainValue,  
       
       //@Search.defaultSearchElement: true
       _ProjectBillingReqStatusText

} where domname = 'PBR_STATUS' and as4local = 'A'
```
