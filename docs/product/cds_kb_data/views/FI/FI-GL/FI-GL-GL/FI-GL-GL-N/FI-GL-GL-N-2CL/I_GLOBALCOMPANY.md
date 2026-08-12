---
name: I_GLOBALCOMPANY
description: "Globalcompany"
app_component: FI-GL-GL-N-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-GL
  - interface-view
  - component:FI-GL-GL-N-2CL
  - lob:Finance
---
# I_GLOBALCOMPANY

**Globalcompany**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-N-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Company` | ✓ | |  | `rcomp` |  |  |
| `CompanyName` |  | |  | `cast(name1 as fis_company_name preserving type )` |  |  |
| `CompanyCurrency` |  | |  | `curr` |  |  |
| `CompanyLanguage` |  | |  | `langu` |  |  |

## Source Code

```abap
@EndUserText.label: 'Global Company'
@Analytics:{
    dataCategory: #DIMENSION,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
        automatic: true
        }
    }
}
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'ICOMPANY'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true 
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'Company'
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #GENERIC
@AbapCatalog.buffering.numberOfKeyFields: 1
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass:  #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #VALUE_HELP
@Search.searchable: true
@Consumption.ranked: true
@ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE,#SEARCHABLE_ENTITY,#VALUE_HELP_PROVIDER,#EXTRACTION_DATA_SOURCE]
@ObjectModel.sapObjectNodeType.name: 'Company'
define view I_Globalcompany
  as select from t880
//  association [0..*] to I_GlobalCompanyHierNode as _GlobalCompanyHierNode    on $projection.Company = _GlobalCompanyHierNode.Company
{
  @ObjectModel.text.element: ['CompanyName']
//  @ObjectModel.hierarchy.association: '_GlobalCompanyHierNode'      
  @Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.8
  @Search.ranking: #HIGH
  key rcomp as Company,
      @Semantics.text: true
      @Search: { defaultSearchElement: true, ranking: #MEDIUM, fuzzinessThreshold: 0.8 }
      @EndUserText.label: 'Name of the Company'
      cast(name1 as fis_company_name preserving type ) as CompanyName,
      curr  as CompanyCurrency,
      langu as CompanyLanguage
      
//      _GlobalCompanyHierNode
}
```
