---
name: I_PRODUCTALLOCATIONPERIODTYPET
description: "Productallocationperiodtypet"
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
# I_PRODUCTALLOCATIONPERIODTYPET

**Productallocationperiodtypet**

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
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `ProdAllocationPeriodTypeDesc` |  | |  | `cast( ddtext as prodallocationperiodtypedesc preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_ProductAllocationPeriodType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_ProductAllocationPeriodType` | `I_ProductAllocationPeriodType` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Product Allocation Period Type - Text' //same as DDL description
@ObjectModel.representativeKey: 'ProductAllocationPeriodType'
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@AccessControl.authorizationCheck: #NOT_REQUIRED //or #CHECK 
@AbapCatalog.sqlViewName: 'IPALPRDTT'
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #META
@ObjectModel.modelingPattern:           #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities:  [  #LANGUAGE_DEPENDENT_TEXT,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SQL_DATA_SOURCE,
                                        #EXTRACTION_DATA_SOURCE,
                                        #SEARCHABLE_ENTITY                   ]
@Metadata.ignorePropagatedAnnotations: true
define view I_ProductAllocationPeriodTypeT //must start with "I_"; same as DDL source name in upper-camelcase notation 
   as select from dd07t
   association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
   association [1..1] to I_ProductAllocationPeriodType as _ProductAllocationPeriodType 
      on $projection.ProductAllocationPeriodType = _ProductAllocationPeriodType.ProductAllocationPeriodType
{
 @ObjectModel.foreignKey.association: '_ProductAllocationPeriodType'
    key cast ( substring( domvalue_l, 1, 2 ) as productallocationperiodtype preserving type ) as ProductAllocationPeriodType,
    @Semantics.language
    key ddlanguage as Language,
    @Semantics.text
    cast( ddtext as prodallocationperiodtypedesc preserving type ) as ProdAllocationPeriodTypeDesc, 
   _ProductAllocationPeriodType, 
    _Language 
}
where domname = 'PRODUCTALLOCATIONPERIODTYPE' and as4local = 'A'
```
