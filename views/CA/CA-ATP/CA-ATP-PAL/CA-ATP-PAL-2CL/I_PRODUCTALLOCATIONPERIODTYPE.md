---
name: I_PRODUCTALLOCATIONPERIODTYPE
description: Productallocationperiodtype
app_component: CA-ATP-PAL-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-ATP
  - CA-ATP-PAL
  - interface-view
  - product
  - component:CA-ATP-PAL-2CL
  - lob:Cross-Application Components
---
# I_PRODUCTALLOCATIONPERIODTYPE

**Productallocationperiodtype**

| Property | Value |
|---|---|
| App Component | `CA-ATP-PAL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProductAllocationPeriodType` | ✓ | |  | `cast ( substring( domvalue_l, 1, 2 ) as productallocationperiodtype preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ProductAllocationPeriodTypeT` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Product Allocation Period Type' //same as DDL description
@ObjectModel.representativeKey: 'ProductAllocationPeriodType'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@AccessControl.authorizationCheck: #NOT_REQUIRED //or #CHECK 
@AbapCatalog.sqlViewName: 'IPALPRDT'
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.sapObjectNodeType.name: 'ProductAllocationPeriodType'
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #META
@ObjectModel.modelingPattern:           #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities:  [  #ANALYTICAL_DIMENSION,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SQL_DATA_SOURCE,
                                        #EXTRACTION_DATA_SOURCE,
                                        #VALUE_HELP_PROVIDER,
                                        #SEARCHABLE_ENTITY                   ]
@Metadata.ignorePropagatedAnnotations: true
define view I_ProductAllocationPeriodType //must start with "I_"; same as DDL source name in upper-camelcase notation 
   as select from dd07l
   association [0..*] to I_ProductAllocationPeriodTypeT as _Text 
      on $projection.ProductAllocationPeriodType = _Text.ProductAllocationPeriodType 
{
 @ObjectModel.text.association: '_Text'
    key cast ( substring( domvalue_l, 1, 2 ) as productallocationperiodtype preserving type ) as ProductAllocationPeriodType
   , _Text
}
where domname  = 'PRODUCTALLOCATIONPERIODTYPE' 
  and as4local = 'A'
```
