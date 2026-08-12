---
name: I_SA_EDOCINVOICEADDLDET
description: "SA Edocinvoiceaddldet"
app_component: CA-GTF-CSC-EDO-SA
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-GTF
  - CA-GTF-CSC
  - interface-view
  - component:CA-GTF-CSC-EDO-SA
  - lob:Cross-Application Components
---
# I_SA_EDOCINVOICEADDLDET

**SA Edocinvoiceaddldet**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-EDO-SA` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ElectronicDocUUID` | ✓ | |  | `edoc_guid` |  |  |
| `SA_ElectronicDocUniqueID` |  | |  | `uuid` |  |  |
| `SA_ElectronicDocSequenceNumber` |  | |  | `counter_num` |  |  |
| `SA_ElectronicDocInvcTransCode` |  | |  | `inv_trans_code` |  |  |
| `SA_EDocLgclSolnUUID` |  | |  | `egs_id` |  |  |
| `SA_EDocPrevInvoiceHashBinary` |  | |  | `previous_inv_hash` |  |  |
| `SA_EDocQRCodeNmbrBinary` |  | |  | `qr_code` |  |  |
| `SA_EDocCryptographicStmpIdBnry` |  | |  | `cryptographic_stamp` |  |  |
| `SA_ElectronicDocHasWarning` |  | |  | `acpt_with_warning` |  |  |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'eDocument KSA Ctry/Reg Specific Data'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{
usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #TRANSACTIONAL},
  supportedCapabilities: [ #SQL_DATA_SOURCE, 
                           #CDS_MODELING_DATA_SOURCE,  
                           #CDS_MODELING_ASSOCIATION_TARGET,
                           #UI_PROVIDER_PROJECTION_SOURCE ],
  modelingPattern: #NONE
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

define view entity I_SA_EDocInvoiceAddlDet as select from edosainv
{
      key edoc_guid       as ElectronicDocUUID,
      uuid                as SA_ElectronicDocUniqueID,
      counter_num         as SA_ElectronicDocSequenceNumber,
      inv_trans_code      as SA_ElectronicDocInvcTransCode,
      egs_id              as SA_EDocLgclSolnUUID,
      previous_inv_hash   as SA_EDocPrevInvoiceHashBinary,
      qr_code             as SA_EDocQRCodeNmbrBinary,
      cryptographic_stamp as SA_EDocCryptographicStmpIdBnry,
      acpt_with_warning   as SA_ElectronicDocHasWarning
}
```
