---
name: I_PURCHASINGDOCUMENTTYPE
description: "Purchasingdocumenttype"
app_component: MM
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
