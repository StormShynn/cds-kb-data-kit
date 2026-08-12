---
name: I_PRODUCTTYPEVH
description: "Producttypevh"
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
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
# I_PRODUCTTYPEVH

**Producttypevh**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProductType` | ✓ | |  | `cast(t134.mtart as producttype preserving type )` |  |  |
| `ProductTypeCode` |  | |  | `prod_type_code` |  |  |
| `AuthorizationGroup` |  | |  | `begru` |  |  |
| `MaintenanceStatus` |  | |  | `pstat` |  |  |
| `_Text` | | ✓ | | | | |
| `_ProductTypeCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ProductTypeText` | [0..*] |
| `_ProductTypeCode` | `I_ProductTypeCode` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPRODTYPVH'
@VDM.viewType: #BASIC
@ObjectModel.dataCategory: #VALUE_HELP
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Product Type'
@Search.searchable: true
@ObjectModel.representativeKey: 'ProductType'
@Analytics : {dataCategory: #DIMENSION }
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory : #L
@ObjectModel.usageType.dataClass: #MASTER
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@Consumption.ranked: true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #ANALYTICAL_DIMENSION ]

define view I_ProductTypeVH
  as select from t134
  association [0..*] to I_ProductTypeText as _Text            on $projection.ProductType = _Text.ProductType
  association [0..1] to I_ProductTypeCode as _ProductTypeCode on $projection.ProductTypeCode = _ProductTypeCode.ProductTypeCode

{
      @ObjectModel.text.association: '_Text'
      @Search:{
        defaultSearchElement: true,
        fuzzinessThreshold: 0.8,
        ranking: #HIGH
       }
  key cast(t134.mtart as producttype preserving type ) as ProductType,

      @ObjectModel.foreignKey.association:'_ProductTypeCode'
      prod_type_code                                   as ProductTypeCode,

      @Consumption.hidden: true // auth checks fields need not be exposed via views. this is kept for DCL.
      t134.begru                                       as AuthorizationGroup,

      @Search:{
        defaultSearchElement: true,  
        fuzzinessThreshold: 0.8,  // Enables fuzzy search for the field 
        ranking: #MEDIUM
      }
      t134.pstat                                       as MaintenanceStatus, 

      _Text,
      _ProductTypeCode
}
```
