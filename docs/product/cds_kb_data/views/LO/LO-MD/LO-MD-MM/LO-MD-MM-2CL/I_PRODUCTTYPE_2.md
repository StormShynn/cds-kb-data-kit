---
name: I_PRODUCTTYPE_2
description: "Producttype 2"
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
  - product
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_PRODUCTTYPE_2

**Producttype 2**

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
| `NumberRangeForExtIDAssignment` |  | |  | `cast(t134.numke as externalnr preserving type )` |  |  |
| `NumberRangeForIntIDAssignment` |  | |  | `cast(t134.numki as internalnr preserving type )` |  |  |
| `ProductTypeOID` |  | |  | `cast( t134.mtart as producttype_oid )` |  |  |
| `_Text` | | ✓ | | | | |
| `_ProductTypeCode` | | ✓ | | | | |
| `_ProductTypeCodeText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ProductTypeText_2` | [0..*] |
| `_ProductTypeCode` | `I_ProductTypeCode` | [0..1] |
| `_ProductTypeCodeText` | `I_ProductTypeCodeText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPRODTYPE2'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #GENERIC
@AbapCatalog.buffering.numberOfKeyFields: 1
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.representativeKey: 'ProductType'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #EXTRACTION_DATA_SOURCE,
                                      #SEARCHABLE_ENTITY,
                                      #ANALYTICAL_DIMENSION ]
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Product Type'
@ObjectModel.sapObjectNodeType.name:'ProductType'
@ObjectModel.objectIdentifier.oidElement: 'ProductTypeOID'
@ObjectModel.alternativeKey:[{id:'OID',element:['ProductTypeOID']}] 

define view I_ProductType_2
  as select from           t134
  association [0..*] to I_ProductTypeText_2 as _Text on $projection.ProductType = _Text.ProductType
  association [0..1] to I_ProductTypeCode as _ProductTypeCode on $projection.ProductTypeCode = _ProductTypeCode.ProductTypeCode
  association [0..*] to I_ProductTypeCodeText as _ProductTypeCodeText on $projection.ProductTypeCode = _ProductTypeCodeText.ProductTypeCode
  
{
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @ObjectModel.text.association: '_Text'
  key cast(t134.mtart as producttype preserving type ) as ProductType,
      @ObjectModel.foreignKey.association:'_ProductTypeCode'
      @ObjectModel.text.association: '_ProductTypeCodeText'
      @Consumption.valueHelpDefinition: [{ entity:  { name: 'I_Producttypecodevh', element: 'ProductTypeCode' }, useAsTemplate: true    }]
      prod_type_code                                   as ProductTypeCode,
      t134.begru                                       as AuthorizationGroup,
      cast(t134.numke as externalnr preserving type )  as NumberRangeForExtIDAssignment,
      cast(t134.numki as internalnr preserving type )  as NumberRangeForIntIDAssignment,
      @ObjectModel.sort.enabled: false
      @ObjectModel.filter.enabled: false
      cast( t134.mtart as producttype_oid ) as ProductTypeOID,
      _Text,
      _ProductTypeCode,
      _ProductTypeCodeText
}
```
