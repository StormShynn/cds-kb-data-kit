---
name: I_SALESDOCAPPROVALREASON
description: "Salesdocapprovalreason"
app_component: SD-SLS-GF-2CL
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
  - SD
  - SD-SLS
  - SD-SLS-GF
  - interface-view
  - approval
  - component:SD-SLS-GF-2CL
  - lob:Sales & Distribution
---
# I_SALESDOCAPPROVALREASON

**Salesdocapprovalreason**

| Property | Value |
|---|---|
| App Component | `SD-SLS-GF-2CL` |
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
| `SDDocumentCategory` | ✓ | |  | `sd_document_category` |  |  |
| `SalesDocApprovalReason` | ✓ | |  | `apm_approval_reason` |  |  |
| `_SDDocumentCategory` | | ✓ | | | | |
| `_SDApprovalReason` | | ✓ | | | | |
| `_SDApprovalReasonT` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SDDocumentCategory` | `I_SDDocumentCategory` | [0..1] |
| `_SDApprovalReason` | `I_SDApprovalReason` | [0..1] |
| `_SDApprovalReasonT` | `I_SDApprovalReasonT` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED

@ObjectModel: {
  representativeKey: 'SalesDocApprovalReason',
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S
  },
  supportedCapabilities: [ #SQL_DATA_SOURCE,
                           #CDS_MODELING_DATA_SOURCE,
                           #CDS_MODELING_ASSOCIATION_TARGET]
}

@AbapCatalog: {
  sqlViewName: 'ISDAPMAPRRCAT',
  preserveKey:true,
  compiler.compareFilter: true,
  buffering: {
    status: #ACTIVE,
    type: #FULL
  }
}

@Analytics.internalName: #LOCAL
@Metadata.ignorePropagatedAnnotations:true
@EndUserText.label: 'Approval Reason for Sales Document'

define view I_SalesDocApprovalReason
  as select from sdapmaprrcat

  association [0..1] to I_SDDocumentCategory as _SDDocumentCategory on $projection.SDDocumentCategory     = _SDDocumentCategory.SDDocumentCategory
  association [0..1] to I_SDApprovalReason   as _SDApprovalReason   on $projection.SalesDocApprovalReason = _SDApprovalReason.SDApprovalReason
  association [0..*] to I_SDApprovalReasonT  as _SDApprovalReasonT  on $projection.SalesDocApprovalReason = _SDApprovalReasonT.SDApprovalReason

{
      @ObjectModel.foreignKey.association: '_SDDocumentCategory'
  key sd_document_category         as SDDocumentCategory,

      @ObjectModel.text.association: '_SDApprovalReasonT'
  key apm_approval_reason          as SalesDocApprovalReason,

      _SDDocumentCategory,     
      _SDApprovalReason,    
      @Analytics.hidden: true
      _SDApprovalReasonT
      
} where sd_document_category = 'B' or
        sd_document_category = 'K' or
        sd_document_category = 'C' or 
        sd_document_category = 'H' or
        sd_document_category = 'G' or
        sd_document_category = 'I' or
        sd_document_category = 'L';
```
