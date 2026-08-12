---
name: I_CLFNCLASSGROUP
description: "Clfnclassgroup"
app_component: CA-CL-2CL
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-CL
  - interface-view
  - component:CA-CL-2CL
  - lob:Cross-Application Components
---
# I_CLFNCLASSGROUP

**Clfnclassgroup**

| Property | Value |
|---|---|
| App Component | `CA-CL-2CL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ClassGroup` | ✓ | |  | `klagr` | `CHAR(10)` | Class Group |
| `ConfigurationDeprecationCode` |  | |  | `configurationdeprecationcode` | `CHAR(1)` | Deprecated Entries |
| `_ClassGroupText` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.sqlViewName: 'INGCCLC7'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Group of Classification Class'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'ClassGroup'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.sapObjectNodeType.name: 'ClassificationClassGroup' 
@ObjectModel.supportedCapabilities:
  [  #CDS_MODELING_DATA_SOURCE,
     #CDS_MODELING_ASSOCIATION_TARGET,
     #EXTRACTION_DATA_SOURCE,
     #ANALYTICAL_DIMENSION,
     #SQL_DATA_SOURCE                  ]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define root view I_ClfnClassGroup 
  as select from tclg as ClassGroup
  
      composition [0..*] of I_ClfnClassGroupText as _ClassGroupText 
{
      @ObjectModel.text.association: '_ClassGroupText'
  key ClassGroup.klagr as ClassGroup,
      ClassGroup.configurationdeprecationcode as ConfigurationDeprecationCode,

      _ClassGroupText
}
```
