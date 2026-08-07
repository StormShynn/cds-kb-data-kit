---
name: I_SERVICEDOCPROBLEMCATEGORY
description: Service DocumentPROBLEMCATEGORY
app_component: CRM-S4-REP-RFW
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - service
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_SERVICEDOCPROBLEMCATEGORY

**Service DocumentPROBLEMCATEGORY**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `'ISRVCDOCPROBCAT'` |  | |  | `sqlViewName: 'ISRVCDOCPROBCAT'` |
| `preserveKey` |  | |  | `true` |
| `true` |  | |  | `compiler.compareFilter: true` |
| `}` |  | |  | `buffering: { status: #ACTIVE, type: #FULL }` |

## Source Code

```abap
@AbapCatalog: 
    {
        sqlViewName: 'ISRVCDOCPROBCAT',
        preserveKey: true,
        compiler.compareFilter: true,
        buffering: 
            { 
                status: #ACTIVE,
                type: #FULL
            }
    }
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Service transaction problem category'
@ObjectModel: 
    {
        representativeKey: 'ServiceDocumentProblemCategory',
        usageType: 
            {
                dataClass: #CUSTOMIZING,
                serviceQuality: #A,
                sizeCategory: #S
            },
   supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]
}

@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
    
@Search.searchable: true
@VDM.viewType: #BASIC

define view I_ServiceDocProblemCategory
  as select from crmc_srqm_prbcat
  association [0..*] to I_SrvcDocProblemCategoryText as _Text on _Text.ServiceDocumentProblemCategory = $projection.ServiceDocumentProblemCategory
{
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.7
      @Search.ranking: #HIGH
      @ObjectModel.text.association: '_Text'
  key problem_category as ServiceDocumentProblemCategory,

      _Text
}
```
