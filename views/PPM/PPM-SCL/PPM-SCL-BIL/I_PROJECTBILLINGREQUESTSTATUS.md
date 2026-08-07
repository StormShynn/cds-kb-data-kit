---
name: I_PROJECTBILLINGREQUESTSTATUS
description: Projectbillingrequeststatus
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
