---
name: I_GR_ELECTRONICDOCINVOICE
description: GR Electronicdocinvoice
app_component: CA-GTF-CSC-EDO-GR
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-GTF
  - CA-GTF-CSC
  - interface-view
  - component:CA-GTF-CSC-EDO-GR
  - lob:Cross-Application Components
---
# I_GR_ELECTRONICDOCINVOICE

**GR Electronicdocinvoice**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-EDO-GR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ElectronicDocUUID` | `GRInv.ElectronicDocUUID` |
| `GR_ElectronicDocRefDocNumber` | `GRInv.GR_ElectronicDocRefDocNumber` |
| `GR_ElectronicDocPrintTaskCode` | `GRInv.GR_ElectronicDocPrintTaskCode` |
| `GR_ElectronicDocSeriesPrefix` | `GRInv.GR_ElectronicDocSeriesPrefix` |
| `GR_ElectronicDocumentSeries` | `GRInv.GR_ElectronicDocumentSeries` |
| `GR_ElectronicDocLegalNumber` | `GRInv.GR_ElectronicDocLegalNumber` |
| `GR_ElectronicDocUniqueID` | `GRInv.GR_ElectronicDocUniqueID` |
| `GR_ElectronicDocMarkID` | `GRInv.GR_ElectronicDocMarkID` |
| `GR_ElectronicDocClfnMarkID` | `GRInv.GR_ElectronicDocClfnMarkID` |
| `GR_ElectronicDocCancelMarkID` | `GRInv.GR_ElectronicDocCancelMarkID` |
| `GR_ElectronicDocCustVATID` | `GRInv.GR_ElectronicDocCustVATID` |
| `GR_ElectronicDocIssueDate` | `GRInv.GR_ElectronicDocIssueDate` |
| `GR_ElectronicDocInvoiceType` | `GRInv.GR_ElectronicDocInvoiceType` |
| `GR_ElectronicDocSupplierVATID` | `GRInv.GR_ElectronicDocSupplierVATID` |
| `GR_ElectronicDocBranchID` | `GRInv.GR_ElectronicDocBranchID` |
| `GR_ElectronicDocGrossAmount` | `GRInv.GR_ElectronicDocGrossAmount` |
| `GR_ElectronicDocPayableAmount` | `GRInv.GR_ElectronicDocPayableAmount` |
| `GR_ElectronicDocNetAmount` | `GRInv.GR_ElectronicDocNetAmount` |
| `GR_ElectronicDocFuelInvoice` | `GRInv.GR_ElectronicDocFuelInvoice` |
| `ElectronicDocCompanyCode` | `EDoc.ElectronicDocCompanyCode` |
| `ElectronicDocCountry` | `EDoc.ElectronicDocCountry` |
| `ElectronicDocSourceType` | `EDoc.ElectronicDocSourceType` |
| `ElectronicDocSourceKey` | `EDoc.ElectronicDocSourceKey` |
| `ElectronicDocType` | `EDoc.ElectronicDocType` |
| `ElectronicDocProcessStatus` | `EDoc.ElectronicDocProcessStatus` |
| `ElectronicDocLogicalSystem` | `EDoc.ElectronicDocLogicalSystem` |
| `ElectronicDocLastChangedByUser` | `EDoc.ElectronicDocLastChangedByUser` |
| `ElectronicDocLastChangeDate` | `EDoc.ElectronicDocLastChangeDate` |
| `ElectronicDocLastChangeTime` | `EDoc.ElectronicDocLastChangeTime` |
| `ElectronicDocCreatedByUser` | `EDoc.ElectronicDocCreatedByUser` |
| `ElectronicDocCreationDate` | `EDoc.ElectronicDocCreationDate` |
| `ElectronicDocCreationTime` | `EDoc.ElectronicDocCreationTime` |
| `ElectronicDocSrceCreatedByUser` | `EDoc.ElectronicDocSrceCreatedByUser` |
| `ElectronicDocProcess` | `EDoc.ElectronicDocProcess` |
| `ElectronicDocLastProcStep` | `EDoc.ElectronicDocLastProcStep` |
| `ElectronicDocLastProcStepVar` | `EDoc.ElectronicDocLastProcStepVar` |
| `ElectronicDocHasError` | `EDoc.ElectronicDocHasError` |
| `ElectronicDocProcessVersion` | `EDoc.ElectronicDocProcessVersion` |
| `ElectronicDocRefSqncNmbr` | `EDoc.ElectronicDocRefSqncNmbr` |
| `ElectronicDocStatus` | `EDoc.ElectronicDocStatus` |
| `ElectronicDocPostingDate` | `EDoc.ElectronicDocPostingDate` |
| `ElectronicDocIsContingency` | `EDoc.ElectronicDocIsContingency` |
| `ElectronicDocReferenceProcess` | `EDoc.ElectronicDocReferenceProcess` |
| `ElectronicDocClassName` | `EDoc.ElectronicDocClassName` |
| `ElectronicDocIsArchPrprocgDone` | `EDoc.ElectronicDocIsArchPrprocgDone` |
| `ElectronicDocInterfaceType` | `EDoc.ElectronicDocInterfaceType` |
| `ElectronicDocApprovalIDValue` | `EDoc.ElectronicDocApprovalIDValue` |
| `ElectronicDocInterfaceUUID` | `EDoc.ElectronicDocInterfaceUUID` |
| `ElectronicDocFileUUID` | `EDoc.ElectronicDocFileUUID` |
| `ElectronicDocResponseCodeValue` | `EDoc.ElectronicDocResponseCodeValue` |
| `ElectronicDocInterfaceID` | `EDoc.ElectronicDocInterfaceID` |
| `ElectronicDocInterfaceVersion` | `EDoc.ElectronicDocInterfaceVersion` |
| `ElectronicDocIsCntdInArchive` | `EDoc.ElectronicDocIsCntdInArchive` |
| `ElectronicDocMetaStatus` | `EDoc.ElectronicDocMetaStatus` |
| `ElectronicDocProcessForStatus` | `EDoc.ElectronicDocProcessForStatus` |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED 

@ObjectModel: {
  usageType:{
    serviceQuality: #A,
    sizeCategory: #M,
    dataClass: #TRANSACTIONAL
  },
  supportedCapabilities: [#SQL_DATA_SOURCE, 
                          #CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET],
  modelingPattern: #NONE
}
 
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
 
@Metadata.ignorePropagatedAnnotations: true
 
@EndUserText.label: 'eDocument Greece Country/Region Specific Data'
 
define view entity I_GR_ElectronicDocInvoice
  as select from R_GR_ElectronicDocInvoice as GRInv
  inner join I_ElectronicDoc as EDoc on GRInv.ElectronicDocUUID = EDoc.ElectronicDocUUID
{

  key GRInv.ElectronicDocUUID,
      GRInv.GR_ElectronicDocRefDocNumber,
      GRInv.GR_ElectronicDocPrintTaskCode,
      GRInv.GR_ElectronicDocSeriesPrefix,
      GRInv.GR_ElectronicDocumentSeries,
      GRInv.GR_ElectronicDocLegalNumber,
      GRInv.GR_ElectronicDocUniqueID,
      GRInv.GR_ElectronicDocMarkID,
      GRInv.GR_ElectronicDocClfnMarkID,
      GRInv.GR_ElectronicDocCancelMarkID,
      GRInv.GR_ElectronicDocCustVATID,
      GRInv.GR_ElectronicDocIssueDate,
      GRInv.GR_ElectronicDocInvoiceType,
      GRInv.GR_ElectronicDocSupplierVATID,
      GRInv.GR_ElectronicDocBranchID,
      GRInv.GR_ElectronicDocGrossAmount,
      GRInv.GR_ElectronicDocPayableAmount,
      GRInv.GR_ElectronicDocNetAmount,
      GRInv.GR_ElectronicDocFuelInvoice,
      EDoc.ElectronicDocCompanyCode,
      EDoc.ElectronicDocCountry,
      EDoc.ElectronicDocSourceType,
      EDoc.ElectronicDocSourceKey,
      EDoc.ElectronicDocType,
      EDoc.ElectronicDocProcessStatus,
      EDoc.ElectronicDocLogicalSystem,
      EDoc.ElectronicDocLastChangedByUser,
      EDoc.ElectronicDocLastChangeDate,
      EDoc.ElectronicDocLastChangeTime,
      EDoc.ElectronicDocCreatedByUser,
      EDoc.ElectronicDocCreationDate,
      EDoc.ElectronicDocCreationTime,
      EDoc.ElectronicDocSrceCreatedByUser,
      EDoc.ElectronicDocProcess,
      EDoc.ElectronicDocLastProcStep,
      EDoc.ElectronicDocLastProcStepVar,    
      EDoc.ElectronicDocHasError,
      EDoc.ElectronicDocProcessVersion,
      EDoc.ElectronicDocRefSqncNmbr,
      EDoc.ElectronicDocStatus,
      EDoc.ElectronicDocPostingDate,
      EDoc.ElectronicDocIsContingency,
      EDoc.ElectronicDocReferenceProcess,
      EDoc.ElectronicDocClassName,
      EDoc.ElectronicDocIsArchPrprocgDone,
      EDoc.ElectronicDocInterfaceType,
      EDoc.ElectronicDocApprovalIDValue,
      EDoc.ElectronicDocInterfaceUUID,
      EDoc.ElectronicDocFileUUID,
      EDoc.ElectronicDocResponseCodeValue,
      EDoc.ElectronicDocInterfaceID,
      EDoc.ElectronicDocInterfaceVersion,
      EDoc.ElectronicDocIsCntdInArchive,
      EDoc.ElectronicDocMetaStatus,
      EDoc.ElectronicDocProcessForStatus      
      }
```
