---
name: D_SLSQTANITMRJCNSTSCHGD
description: D Slsqtanitmrjcnstschgd
app_component: SD-SLS-QUT-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-QUT
  - component:SD-SLS-QUT-2CL
  - lob:Sales & Distribution
---
# D_SLSQTANITMRJCNSTSCHGD

**D Slsqtanitmrjcnstschgd**

| Property | Value |
|---|---|
| App Component | `SD-SLS-QUT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EventRaisedDateTime` |  | |  | `vdm_lastchangedon` |  |  |
| `SalesQuotationType` |  | |  | `auart_unv` |  |  |
| `SalesOrganization` |  | |  | `vkorg` |  |  |
| `DistributionChannel` |  | |  | `vtweg` |  |  |
| `OrganizationDivision` |  | |  | `spart` |  |  |
| `SoldToParty` |  | |  | `kunnr` |  |  |
| `SalesQuotationItemCategory` |  | |  | `pstyv` |  |  |
| `Product` |  | |  | `matnr` |  |  |
| `SDDocumentRejectionStatus` |  | |  | `absta_vb` |  |  |
| `PreviousSDDocRejectionStatus` |  | |  | `absta_vb` |  |  |
| `SalesDocumentRjcnReason` |  | |  | `abgru_va` |  |  |

## Source Code

```abap
@EndUserText.label: 'Sales Quotation Item Rejection Sts Chgd'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.sapObjectNodeType.name: 'SalesQuotationItem'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions      // **** enable extensibility ****
define abstract entity D_SlsQtanItmRjcnStsChgd
{
      @Event.raisedAt.dateTime: true
      EventRaisedDateTime                     : vdm_lastchangedon;

      SalesQuotationType                      : auart_unv;

      SalesOrganization                       : vkorg;

      DistributionChannel                     : vtweg;

      OrganizationDivision                    : spart;
      
      SoldToParty                             : kunnr;
      
      SalesQuotationItemCategory              : pstyv;
      
      Product                                 : matnr; 

      @Event.qualifiesEventType: true
      @Event.previousValue.element: 'PreviousSDDocRejectionStatus'
      SDDocumentRejectionStatus               : absta_vb;

      PreviousSDDocRejectionStatus            : absta_vb;
      
      SalesDocumentRjcnReason                 : abgru_va;

}
```
