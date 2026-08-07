---
name: I_PURCHASINGGROUP
description: Purchasinggroup
app_component: MM
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - interface-view
  - component:MM
  - lob:Sourcing & Procurement
---
# I_PURCHASINGGROUP

**Purchasinggroup**

| Property | Value |
|---|---|
| App Component | `MM` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `PurchasingGroup` | ✓ | |  | `ekgrp` |
| `PurchasingGroupName` |  | |  | `cast(t024.eknam as mm_a_purg_grp_name preserving type )` |
| `PurchasingGroupPhoneNumber` |  | |  | `ektel` |
| `FaxNumber` |  | |  | `telfx` |
| `PhoneNumber` |  | |  | `tel_number` |
| `PhoneNumberExtension` |  | |  | `tel_extens` |
| `EmailAddress` |  | |  | `smtp_addr` |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'PurchasingGroup'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A 
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.sapObjectNodeType.name:'PurchasingGroup'
@AbapCatalog.sqlViewName: 'IMMPURCHGROUP'
@AbapCatalog.preserveKey:true 
@EndUserText.label: 'Purchasing Group'
@Analytics.dataCategory: #DIMENSION
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities:[#SQL_DATA_SOURCE,
                                    #CDS_MODELING_DATA_SOURCE, 
                                    #CDS_MODELING_ASSOCIATION_TARGET, 
                                    #ANALYTICAL_DIMENSION,
                                    #EXTRACTION_DATA_SOURCE]
@Analytics.dataExtraction.enabled: true
@Search.searchable: true        
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck:#NOT_REQUIRED
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
define view I_PurchasingGroup 

as select from t024 
{
    @ObjectModel.text.element : 'PurchasingGroupName'
    
    @Consumption.labelElement: 'PurchasingGroupName'  
    @Search.defaultSearchElement: true
    @Search.fuzzinessThreshold: 0.75  
    key t024.ekgrp as PurchasingGroup,
    
    @Semantics.text: true
    @Search.defaultSearchElement: true
    @Search.fuzzinessThreshold: 0.75
    cast(t024.eknam as mm_a_purg_grp_name preserving type ) as PurchasingGroupName,
   
    t024.ektel as PurchasingGroupPhoneNumber,
    
    t024.telfx as FaxNumber,
    
    t024.tel_number as PhoneNumber,
    
    t024.tel_extens as PhoneNumberExtension,
    
    t024.smtp_addr as EmailAddress


}
```
