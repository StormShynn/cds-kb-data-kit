---
name: I_PRODUCTTYPE
description: "Producttype"
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
  - product
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_PRODUCTTYPE

**Producttype**

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
| `ReferenceProductType` |  | |  | `mtref` |  |  |
| `AcctCategoryRef` |  | |  | `kkref` |  |  |
| `_Text` | | ✓ | | | | |
| `_ProductTypeCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ProductTypeText` | [0..*] |
| `_ProductTypeCode` | `I_ProductTypeCode` | [0..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'IPRODTYPE',
  compiler.compareFilter: true,
  preserveKey: true,
  buffering: {
    status: #ACTIVE,
    type: #GENERIC,
    numberOfKeyFields: 1
  }
 }
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@VDM.lifecycle.status: #DEPRECATED
@VDM.lifecycle.successor: 'I_ProductType_2'
@EndUserText.label: 'Product Type'
@ObjectModel:{
  representativeKey: 'ProductType',
  usageType: {
    serviceQuality: #A,
    sizeCategory : #L,
    dataClass: #CUSTOMIZING
  },
  dataCategory: #VALUE_HELP,
  supportedCapabilities: [ #SQL_DATA_SOURCE,
                           #CDS_MODELING_DATA_SOURCE,
                           #CDS_MODELING_ASSOCIATION_TARGET,
                           #SEARCHABLE_ENTITY,
                           #VALUE_HELP_PROVIDER,
                           #ANALYTICAL_DIMENSION,
                           #EXTRACTION_DATA_SOURCE
  ]
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true
@Analytics:{
    dataCategory: #DIMENSION,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture.automatic: true
    }
}
@Consumption.ranked: true
@ObjectModel.sapObjectNodeType.name:'ProductType'

define view I_Producttype
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
      @EndUserText.label: 'Authorization Group' 
      t134.begru                                       as AuthorizationGroup,
      @EndUserText.label: 'Maintenance Status' 
      t134.pstat                                       as MaintenanceStatus,
      @EndUserText.label: 'Ref. Material Type'
      t134.mtref                                       as ReferenceProductType,
      @EndUserText.label: 'Acct Cat. Reference'
      t134.kkref                                       as AcctCategoryRef,
      _Text,
      _ProductTypeCode

}
```
