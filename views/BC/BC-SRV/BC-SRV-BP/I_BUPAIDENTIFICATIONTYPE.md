---
name: I_BUPAIDENTIFICATIONTYPE
description: Bupaidentificationtype
app_component: BC-SRV-BP
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-SRV
  - BC-SRV-BP
  - interface-view
  - component:BC-SRV-BP
  - lob:Basis Components
---
# I_BUPAIDENTIFICATIONTYPE

**Bupaidentificationtype**

| Property | Value |
|---|---|
| App Component | `BC-SRV-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `BPIdentificationType` | ✓ | |  | `type` |
| `BPIdentificationCategory` |  | |  | `category` |
| `IsBPPerson` |  | |  | `xperson` |
| `IsBPOrganization` |  | |  | `xorganisation` |
| `IsBPGroup` |  | |  | `xgroup` |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'BUPA_ID_TYPE'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction: {
    enabled: true
  }
}
@ObjectModel.sapObjectNodeType.name: 'BPIdentificationType'
@ObjectModel.representativeKey: 'BPIdentificationType'
@EndUserText.label: 'CDS View for BP Identification Types'
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #EXTRACTION_DATA_SOURCE,
                                     #ANALYTICAL_DIMENSION]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION                                         
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MASTER

define view I_BuPaIdentificationType as select from tb039a {
 key type as BPIdentificationType,
 category as BPIdentificationCategory,
 xperson as IsBPPerson,
 xorganisation as IsBPOrganization,
 xgroup as IsBPGroup
    
}
```
