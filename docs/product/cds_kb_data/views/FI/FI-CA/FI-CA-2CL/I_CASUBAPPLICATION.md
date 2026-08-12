---
name: I_CASUBAPPLICATION
description: "Casubapplication"
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - interface-view
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CASUBAPPLICATION

**Casubapplication**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CASubApplication` | ✓ | |  |  |  |  |
| `_CASubApplicationText` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics:{ dataCategory: #DIMENSION,
             dataExtraction.enabled: true }

@EndUserText.label: 'Contract Subapplication'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CASubApplication',
                sapObjectNodeType.name: 'ContrAcctgSubapplication',
                supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                         #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #EXTRACTION_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #COMPOSITE

define view entity I_CASubApplication 
  as select from I_CASubApplicationActive 

{
      @ObjectModel.text.association: '_CASubApplicationText'
  key CASubApplication,
  
  _CASubApplicationText
} 

union all select from P_CASubApplicationSpace 

  association [1..*] to I_CASubApplicationText as _CASubApplicationText on $projection.CASubApplication = _CASubApplicationText.CASubApplication

{
  key CASubApplication,
  
  _CASubApplicationText
  
}
```
