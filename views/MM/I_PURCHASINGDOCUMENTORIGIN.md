---
name: I_PURCHASINGDOCUMENTORIGIN
description: "Purchasingdocumentorigin"
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
# I_PURCHASINGDOCUMENTORIGIN

**Purchasingdocumentorigin**

| Property | Value |
|---|---|
| App Component | `MM` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchasingDocumentOrigin` | ✓ | |  | `cast ( domvalue_l as vdm_purhasingdocumentorigin )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IMMPURGDOCORIG'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Purchasing Document Origin' //same as DDL description
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'PurchasingDocumentOrigin'
@ObjectModel.semanticKey: [ 'PurchasingDocumentOrigin' ]
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE, #ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #VALUE_HELP_PROVIDER ]
@ObjectModel.sapObjectNodeType.name:'PurchasingDocumentOrigin'
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION


define root view I_PurchasingDocumentOrigin
  as select from dd07l
  composition [0..*] of I_PurchasingDocumentOriginText as _Text
{
      @ObjectModel.text.association: '_Text'
  key cast ( domvalue_l as vdm_purhasingdocumentorigin ) as PurchasingDocumentOrigin,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                   as DomainValue,
      _Text
}
where
      dd07l.domname  = 'ESTAK'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
