---
name: I_PURCHASINGDOCUMENTTYPE
description: "Purchasingdocumenttype"
app_component: MM
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - interface-view
  - document
  - component:MM
  - lob:Sourcing & Procurement
---
# I_PURCHASINGDOCUMENTTYPE

**Purchasingdocumenttype**

| Property | Value |
|---|---|
| App Component | `MM` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchasingDocumentCategory` | ✓ | |  | `bstyp` |  |  |
| `PurchasingDocumentType` | ✓ | |  | `bsart` |  |  |
| `PurchasingDocumentSubtype` |  | |  | `bsakz` |  |  |
| `PurgDocFieldSelControlKey` |  | |  | `brefn` |  |  |
| `PurgHasFlxblWorkflowApproval` |  | |  | `scnr_based_wfl` |  |  |
| `IsPurReqnOvrlRel` |  | |  | `gsfrg` |  |  |
| `PartnerDeterminationProcedure` |  | |  | `pargr` |  |  |
| `_Category` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Category` | `I_PurchasingDocumentCategory` | [1..1] |

## Source Code

```abap
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.representativeKey: 'PurchasingDocumentType'
@ObjectModel.sapObjectNodeType.name:'PurchasingDocumentType'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [ #SEARCHABLE_ENTITY, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION ]
@AbapCatalog.sqlViewName: 'IMMPURGDOCTYP'
@EndUserText.label: 'Purchasing Document Type'
@Analytics.dataCategory: #DIMENSION 
@AccessControl.authorizationCheck:#NOT_REQUIRED
@VDM.viewType : #BASIC
@Search.searchable: true
@Analytics.dataExtraction.enabled: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

define root view I_PurchasingDocumentType as select from t161 

association [1..1] to I_PurchasingDocumentCategory as _Category on $projection.PurchasingDocumentCategory = _Category.PurchasingDocumentCategory 
composition [0..*] of I_PurchasingDocumentTypeText as _Text 
                                                           
                                                           
                                                          
{
    
    
    @ObjectModel.foreignKey.association: '_Category'
    key bstyp               as PurchasingDocumentCategory,
    @ObjectModel.text.association: '_Text'
    @Search.defaultSearchElement: true
    @Search.fuzzinessThreshold: 0.8
    @Search.ranking: #HIGH
    key bsart               as PurchasingDocumentType,
    bsakz                   as PurchasingDocumentSubtype,
    brefn                   as PurgDocFieldSelControlKey,
    scnr_based_wfl          as PurgHasFlxblWorkflowApproval,
    gsfrg                   as IsPurReqnOvrlRel,
    pargr                   as PartnerDeterminationProcedure,
    _Text ,
    _Category
}
```
