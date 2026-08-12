---
name: I_PROJECTBILLINGREQUESTTYPE
description: "Projectbillingrequesttype"
app_component: PPM-SCL-BIL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
  - component:PPM-SCL-BIL
  - lob:Other
  - bo:Project
---
# I_PROJECTBILLINGREQUESTTYPE

**Projectbillingrequesttype**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-BIL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProjectBillingRequestType` | ✓ | |  | `cast( substring( domvalue_l, 1, 4 ) as pbr_doc_type preserving type )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_ProjectBillingRequestTypeTxt` | | ✓ | | | | |

## Source Code

```abap
@Analytics.technicalName: 'IPBREQTYPE'
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@Analytics.dataExtraction.enabled: true
@AccessControl.authorizationCheck: #NOT_REQUIRED  
@EndUserText.label: 'Project Billing Request Document Type'
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'ProjectBillingRequestType'
@ObjectModel.representativeKey: 'ProjectBillingRequestType'
@ObjectModel.usageType: {
    serviceQuality: #A,
    sizeCategory: #S,
    dataClass: #META  
}
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.supportedCapabilities: [ 
                                     #CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE, 
                                     #VALUE_HELP_PROVIDER,
                                     #ANALYTICAL_DIMENSION]
@ObjectModel.dataCategory: #VALUE_HELP  
                  
              

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API


define root view entity I_ProjectBillingRequestType as select from dd07l
 composition [0..*] of I_ProjectBillingRequestTypeTxt as _ProjectBillingRequestTypeTxt
{
    @ObjectModel.text.association: '_ProjectBillingRequestTypeTxt'
   key cast( substring( domvalue_l, 1, 4 ) as pbr_doc_type preserving type ) as ProjectBillingRequestType,
       @Analytics.hidden: true
       @Consumption.hidden: true
       @Search.defaultSearchElement: true
       @Search.ranking: #HIGH
      dd07l.domvalue_l as DomainValue,
   
       
        
        _ProjectBillingRequestTypeTxt 
}
where domname  = 'PBR_DOC_TYPE' and as4local = 'A'
```
