---
name: I_RESPONSEPROFILE
description: "Responseprofile"
app_component: CRM-S4-REP-RFW
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_RESPONSEPROFILE

**Responseprofile**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ResponseProfile` | ✓ | |  | `srv_escal` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ResponseProfileText` | [1..*] |

## Source Code

```abap
@EndUserText.label: 'Response Profile'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog: {
  sqlViewName: 'IRSPPRFL',
  compiler.compareFilter: true
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@AccessControl.authorizationCheck: #NOT_REQUIRED

@ObjectModel:{
  dataCategory: #VALUE_HELP,
  usageType.serviceQuality: #A,
  usageType.sizeCategory: #S ,
  usageType.dataClass: #CUSTOMIZING,
  representativeKey: 'ResponseProfile',
  modelingPattern: #ANALYTICAL_DIMENSION,
  sapObjectNodeType.name: 'ServiceResponseProfile',
  supportedCapabilities: [#ANALYTICAL_DIMENSION, 
                          #CDS_MODELING_ASSOCIATION_TARGET, 
                          #SQL_DATA_SOURCE, 
                          #CDS_MODELING_DATA_SOURCE,
                          #VALUE_HELP_PROVIDER,
                          #EXTRACTION_DATA_SOURCE]
}
@Metadata.ignorePropagatedAnnotations: true

@Analytics: {
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
  }  
@Consumption.ranked: true  
@Search.searchable: true     

define view I_ResponseProfile
  as select from crmd_escal
  association [1..*] to I_ResponseProfileText as _Text on $projection.ResponseProfile = _Text.ResponseProfile
{

      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH  
      @ObjectModel.text.association: '_Text'
  key srv_escal as ResponseProfile,
      _Text

}
```
