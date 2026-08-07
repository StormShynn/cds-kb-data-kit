---
name: I_CNSLDTNBILLINGDOCUMENTTYPE
description: CNSLDTNBilling DocumentUMENTTYPE
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-MD
  - interface-view
  - billing-document
  - billing
  - document
  - component:FIN-CS-MD-2CL
  - lob:Other
  - bo:BillingDocument
---
# I_CNSLDTNBILLINGDOCUMENTTYPE

**CNSLDTNBilling DocumentUMENTTYPE**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `BillingDocumentType` | ✓ | |  | `cast ( _CnsldtnBillingDocumentType.BillingDocumentType as fincs_billingdocumenttype preserving type )` |
| `AdditionalMasterDataSource` |  | |  | `cast( max ( AdditionalMasterDataSource ) as fincs_masterdatasource preserving type )` |
| `CnsldtnIsAdditionalMasterData` |  | |  | `cast( max ( CnsldtnIsAdditionalMasterData ) as fincs_isadditionalmasterdata preserving type )` |
| `_Text` | | ✓ | | |
| `_MDSource` | | ✓ | | |
| `_HierarchyNode` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CnsldtnBillingDocumentTypeT` | [0..*] |
| `_MDSource` | `I_CnsldtnMDSource` | [1..1] |
| `_HierarchyNode` | `I_CnsldtnBillgDocTypeHierNode` | [0..*] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSBILLDOCTYPE',
  compiler.compareFilter: true,
  viewEnhancementCategory: [ #PROJECTION_LIST, #GROUP_BY ]
}
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true
}
@AccessControl: {
  authorizationCheck: #MANDATORY
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata:{
  allowExtensions:true,
  ignorePropagatedAnnotations: true
}
@ObjectModel: {
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #S},
  representativeKey: 'BillingDocumentType',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #ANALYTICAL_DIMENSION],
  sapObjectNodeType.name: 'CnsldtnBillingDocumentType'
}
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'Cnsldtn Combined Billing Document Type'

// CE 2302: complete release with text & VH view
// expose only additional master data entity in case of homonymous non-additional master data entity existence
define view I_CnsldtnBillingDocumentType
  as select distinct from P_CnsldtnBillingDocumentType as _CnsldtnBillingDocumentType

  association [0..*] to I_CnsldtnBillingDocumentTypeT as _Text          on $projection.BillingDocumentType = _Text.BillingDocumentType

  association [1..1] to I_CnsldtnMDSource             as _MDSource      on $projection.AdditionalMasterDataSource = _MDSource.AdditionalMasterDataSource

  association [0..*] to I_CnsldtnBillgDocTypeHierNode as _HierarchyNode on $projection.BillingDocumentType = _HierarchyNode.BillingDocumentType


{

      @ObjectModel.text.association: '_Text'
      @ObjectModel.hierarchy.association: '_HierarchyNode'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnBillingDocumentTypeVH',
          element: 'BillingDocumentType'
        }
      }]
  key cast ( _CnsldtnBillingDocumentType.BillingDocumentType as fincs_billingdocumenttype preserving type ) as BillingDocumentType,

      @ObjectModel.foreignKey.association: '_MDSource'
      @API.element: {releaseState: #DEPRECATED, successor: 'CnsldtnIsAdditionalMasterData'}
      @VDM.lifecycle: {status: #DEPRECATED, successor: 'CnsldtnIsAdditionalMasterData' }
      cast( max ( AdditionalMasterDataSource ) as fincs_masterdatasource preserving type )                  as AdditionalMasterDataSource,

      cast( max ( CnsldtnIsAdditionalMasterData ) as fincs_isadditionalmasterdata preserving type )         as CnsldtnIsAdditionalMasterData,


      /* associations */
      _Text,
      _MDSource,
      _HierarchyNode

}
where
  BillingDocumentType is not initial //required to avoid access to corrupt database entries
group by
  BillingDocumentType
```
