---
name: I_SUPLRINVCCHGDOCAPI01
description: "Suplrinvcchgdocapi 01"
app_component: MM-IV-LIV-2CL
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
  - MM-IV
  - MM-IV-LIV
  - interface-view
  - component:MM-IV-LIV-2CL
  - lob:Sourcing & Procurement
---
# I_SUPLRINVCCHGDOCAPI01

**Suplrinvcchgdocapi 01**

| Property | Value |
|---|---|
| App Component | `MM-IV-LIV-2CL` |
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
| `ChangeDocObject` | ✓ | |  |  |  |  |
| `ChangeDocObjectClass` | ✓ | |  |  |  |  |
| `ChangeDocument` | ✓ | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `FullName` |  | |  |  |  |  |
| `FirstName` |  | |  |  |  |  |
| `LastName` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreationTime` |  | |  |  |  |  |
| `_SuplrInvcChgDocItmAPI01` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SuplrInvcChgDocItmAPI01` | `I_SuplrInvcChgDocItmAPI01` | [1..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'ISINVCHGDOCAPI01'
@AbapCatalog.compiler.compareFilter: true

@AccessControl.authorizationCheck: #PRIVILEGED_ONLY

@VDM.viewType : #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@EndUserText.label: 'Change Documents for Supplier Invoices'
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE ]
@ObjectModel.modelingPattern: #NONE
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@AccessControl.privilegedAssociations:[ '_SuplrInvcChgDocItmAPI01' ] 
@Metadata.ignorePropagatedAnnotations:true
@AbapCatalog.preserveKey:true

define view I_SuplrInvcChgDocAPI01
  as select from I_SupplierInvoiceChangeDoc
  association [1..*] to I_SuplrInvcChgDocItmAPI01 as _SuplrInvcChgDocItmAPI01 on $projection.ChangeDocument         = _SuplrInvcChgDocItmAPI01.ChangeDocument
                                                                              and $projection.ChangeDocObject       = _SuplrInvcChgDocItmAPI01.ChangeDocObject
                                                                              and $projection.ChangeDocObjectClass  = _SuplrInvcChgDocItmAPI01.ChangeDocObjectClass
{
  key ChangeDocObject,
  key ChangeDocObjectClass,
  key ChangeDocument,
      
      CreatedByUser,
      FullName,
      FirstName,
      LastName,
      CreationDate,
      CreationTime,

      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _SuplrInvcChgDocItmAPI01
}
```
