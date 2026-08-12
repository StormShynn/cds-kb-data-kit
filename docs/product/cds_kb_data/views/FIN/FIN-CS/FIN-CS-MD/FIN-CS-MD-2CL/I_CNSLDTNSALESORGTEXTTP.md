---
name: I_CNSLDTNSALESORGTEXTTP
description: "CNSLDTNSales OrganizationTEXTTP"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
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
  - text
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNSALESORGTEXTTP

**CNSLDTNSales OrganizationTEXTTP**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | | `_Text` | `Language` |  |  |
| `SalesOrganization` | ✓ | | `_Text` | `SalesOrganization` |  |  |
| `SalesOrganizationName` |  | | `_Text` | `SalesOrganizationName` |  |  |
| `CnsldtnIsAdditionalMasterData` |  | | `_Text` | `CnsldtnIsAdditionalMasterData` |  |  |
| `I_CnsldtnSalesOrganizationTP` |  | |  | `_SalesOrganization as _SalesOrganization : redirected to parent I_CnsldtnSalesOrganizationTP` |  |  |

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #MANDATORY
}
@Metadata: {
  ignorePropagatedAnnotations: true
}
@ObjectModel: {
  dataCategory: #TEXT,
  modelingPattern: #TRANSACTIONAL_INTERFACE,
//  sapObjectNodeType:{
//    name: 'CnsldtnSalesOrganizationText'
//  },
  semanticKey: [
    'Language',
    'SalesOrganization'
  ],
  supportedCapabilities: [
    #TRANSACTIONAL_PROVIDER
  ],
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #S
  }
}
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
@EndUserText.label: 'Cnsldtn Sales Organization - Text TP'
define view entity I_CnsldtnSalesOrgTextTP
  as projection on R_CnsldtnSalesOrgTextTP as _Text

{
      @Semantics.language
  key _Text.Language,

  key _Text.SalesOrganization,

      @Semantics.text
      _Text.SalesOrganizationName,

      _Text.CnsldtnIsAdditionalMasterData,


      /* associations for transactional processing */
      _SalesOrganization as _SalesOrganization : redirected to parent I_CnsldtnSalesOrganizationTP

}
```
