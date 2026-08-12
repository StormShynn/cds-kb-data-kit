---
name: I_SUPLRCONFCATINTERNALASSGMT
description: "Suplrconfcatinternalassgmt"
app_component: MM
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - interface-view
  - component:MM
  - lob:Sourcing & Procurement
---
# I_SUPLRCONFCATINTERNALASSGMT

**Suplrconfcatinternalassgmt**

| Property | Value |
|---|---|
| App Component | `MM` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SupplierConfInternalCategory` | ✓ | |  | `ibtyp` |  |  |
| `SupplierConfirmationCategory` |  | |  | `ebtyp` |  |  |
| `DeliveryDocumentType` |  | |  | `lfart` |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ISUPLRCONFCATINT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Supplier Confirmation Cat Assignment'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.compositionRoot: true
@ObjectModel.representativeKey: 'SupplierConfInternalCategory'
@ObjectModel.supportedCapabilities: [ 
                                     #CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE,
                                     #ANALYTICAL_DIMENSION
                                     ]
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.sapObjectNodeType.name:'SuplrConfIntCatAssignment'
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

define view I_SuplrConfCatInternalAssgmt as select from t163d {
  key ibtyp as SupplierConfInternalCategory,
      @Search: { defaultSearchElement: true }
      ebtyp as SupplierConfirmationCategory,
      lfart as DeliveryDocumentType
}
```
