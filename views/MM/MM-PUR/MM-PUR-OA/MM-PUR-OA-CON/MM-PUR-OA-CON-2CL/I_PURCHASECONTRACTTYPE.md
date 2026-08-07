---
name: I_PURCHASECONTRACTTYPE
description: "Purchase ContractTYPE"
app_component: MM-PUR-OA-CON-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-OA
  - interface-view
  - purchase-contract
  - contract
  - component:MM-PUR-OA-CON-2CL
  - lob:Sourcing & Procurement
---
# I_PURCHASECONTRACTTYPE

**Purchase ContractTYPE**

| Property | Value |
|---|---|
| App Component | `MM-PUR-OA-CON-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchaseContractType` | ✓ | |  | `PurchasingDocumentType` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PurchasingDocumentTypeText` | [0..*] |

## Source Code

```abap
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.representativeKey: 'PurchaseContractType'
@ObjectModel.sapObjectNodeType.name: 'PurchaseContractType'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION ]
@AbapCatalog.sqlViewName: 'IMMPURCONTRTYPE'
@EndUserText.label: 'Purchase Contract Type'
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName:#LOCAL
@AccessControl.authorizationCheck:#NOT_REQUIRED
@VDM.viewType : #BASIC
@Search.searchable: true
@Analytics.dataExtraction.enabled: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
define root view I_PurchaseContractType as select from I_PurchasingDocumentType
association [0..*] to I_PurchasingDocumentTypeText as _Text on  $projection.PurchaseContractType = _Text.PurchasingDocumentType
                                                            and _Text.PurchasingDocumentCategory = 'K'
 {
 
    @ObjectModel.text.association: '_Text'
    @Search.defaultSearchElement: true
    @Search.fuzzinessThreshold: 0.8
    @Search.ranking: #HIGH
    key PurchasingDocumentType as PurchaseContractType,
    _Text 

}
where
       PurchasingDocumentCategory = 'K'
```
