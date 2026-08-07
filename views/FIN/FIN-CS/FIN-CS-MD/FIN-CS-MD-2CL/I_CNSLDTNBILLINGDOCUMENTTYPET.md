---
name: I_CNSLDTNBILLINGDOCUMENTTYPET
description: CNSLDTNBilling DocumentUMENTTYPET
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
# I_CNSLDTNBILLINGDOCUMENTTYPET

**CNSLDTNBilling DocumentUMENTTYPET**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Language` | ✓ | | `_Source` | `Language` |
| `BillingDocumentType` | ✓ | |  | `cast ( _Source.BillingDocumentType as fincs_billingdocumenttype preserving type )` |
| `AdditionalMasterDataSource` |  | |  | `cast ( _Source.AdditionalMasterDataSource as fincs_masterdatasource preserving type )` |
| `BillingDocumentTypeName` |  | |  | `cast ( _Source.BillingDocumentTypeName as fincs_billingdocumenttypename preserving type )` |
| `CnsldtnIsAdditionalMasterData` |  | | `_Source` | `CnsldtnIsAdditionalMasterData` |
| `_Language` | | ✓ | | |
| `_BillingDocumentType` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1..1] |
| `_BillingDocumentType` | `I_CnsldtnBillingDocumentType` | [1..1] |

## Source Code

```abap
@AbapCatalog: {
  sqlViewName: 'ICSBILLDOCTYPET',
  compiler.compareFilter: true
}
@Analytics: {
  dataExtraction.enabled: true
}
@AccessControl: {
  authorizationCheck: #MANDATORY
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #M},
  representativeKey: 'BillingDocumentType',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT ],
  sapObjectNodeType.name: 'CnsldtnBillingDocumentTypeText'                        
}
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Cnsldtn Combined Billing Doc Type - Text'
define view I_CnsldtnBillingDocumentTypeT
  as select distinct from P_CnsldtnBillingDocumentTypeT as _Source

    inner join            I_CnsldtnBillingDocumentType  as _Main on  _Main.BillingDocumentType           = _Source.BillingDocumentType
                                                                 and _Main.CnsldtnIsAdditionalMasterData = _Source.CnsldtnIsAdditionalMasterData

  association [1..1] to I_Language                   as _Language            on $projection.Language = _Language.Language

  association [1..1] to I_CnsldtnBillingDocumentType as _BillingDocumentType on $projection.BillingDocumentType = _BillingDocumentType.BillingDocumentType
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key _Source.Language,

      @ObjectModel.foreignKey.association: '_BillingDocumentType'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnBillingDocumentTypeVH',
          element: 'BillingDocumentType'
        }
      }]
  key cast ( _Source.BillingDocumentType as fincs_billingdocumenttype preserving type )         as BillingDocumentType,

      @API.element: {releaseState: #DEPRECATED, successor: 'CnsldtnIsAdditionalMasterData'}
      @VDM.lifecycle: {status: #DEPRECATED, successor: 'CnsldtnIsAdditionalMasterData' }
      cast ( _Source.AdditionalMasterDataSource as fincs_masterdatasource preserving type )     as AdditionalMasterDataSource,

      @Semantics.text
      cast ( _Source.BillingDocumentTypeName as fincs_billingdocumenttypename preserving type ) as BillingDocumentTypeName,

      _Source.CnsldtnIsAdditionalMasterData,


      /* associations */
      _Language,
      _BillingDocumentType
}
where
  _Source.Language is not null
```
