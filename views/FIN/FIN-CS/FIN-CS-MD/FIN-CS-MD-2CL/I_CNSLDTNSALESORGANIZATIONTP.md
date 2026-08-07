---
name: I_CNSLDTNSALESORGANIZATIONTP
description: "CNSLDTNSales OrganizationTP"
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
  - transactional-processing
  - sales-organization
  - component:FIN-CS-MD-2CL
  - lob:Other
  - bo:SalesOrganization
---
# I_CNSLDTNSALESORGANIZATIONTP

**CNSLDTNSales OrganizationTP**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesOrganization` | ✓ | | `_CnsldtnSalesOrganization` | `SalesOrganization` |  |  |
| `CnsldtnIsAdditionalMasterData` |  | | `_CnsldtnSalesOrganization` | `CnsldtnIsAdditionalMasterData` |  |  |
| `I_CnsldtnSalesOrgTextTP` |  | |  | `_Text as _Text : redirected to composition child I_CnsldtnSalesOrgTextTP` |  |  |

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #MANDATORY
}
@Metadata: {
  ignorePropagatedAnnotations: true
}
@ObjectModel: {
  modelingPattern: #TRANSACTIONAL_INTERFACE,
  sapObjectNodeType:{
    name: 'CnsldtnSalesOrganization'
  },
  semanticKey: [
    'SalesOrganization'
  ],
  supportedCapabilities: [
    #TRANSACTIONAL_PROVIDER
  ],
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #B,
    sizeCategory: #S
  }
}
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
@EndUserText.label: 'Consolidation Sales Organization - TP'
define root view entity I_CnsldtnSalesOrganizationTP
  provider contract transactional_interface
  as projection on R_CnsldtnSalesOrganizationTP as _CnsldtnSalesOrganization

{

  key _CnsldtnSalesOrganization.SalesOrganization,

      _CnsldtnSalesOrganization.CnsldtnIsAdditionalMasterData,


      /* associations for transactional processing */
      _Text as _Text : redirected to composition child I_CnsldtnSalesOrgTextTP

}
```
