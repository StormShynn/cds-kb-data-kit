---
name: I_PRODUCTTYPECODEVH
description: Producttypecodevh
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-MM
  - interface-view
  - value-help
  - product
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_PRODUCTTYPECODEVH

**Producttypecodevh**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ProductTypeCode` | ✓ | |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPRODCODETYVH'
@VDM.viewType: #COMPOSITE
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Search.searchable: true
@ObjectModel.representativeKey: 'ProductTypeCode'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory : #S
@ObjectModel.usageType.dataClass: #MASTER
@EndUserText.label: 'Product Type Code'
@ObjectModel.dataCategory: #VALUE_HELP
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER ]
define view I_Producttypecodevh
  as select from I_ProductTypeCode
{

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key I_ProductTypeCode.ProductTypeCode,
      I_ProductTypeCode._Text
}
```
