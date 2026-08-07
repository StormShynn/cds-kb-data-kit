---
name: I_BKPOAAUTHZDRPRSTVTP_2
description: Bkpoaauthzdrprstvtp 2
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-CLM
  - interface-view
  - transactional-processing
  - component:FIN-FSCM-CLM-BAM-2CL
  - lob:Other
---
# I_BKPOAAUTHZDRPRSTVTP_2

**Bkpoaauthzdrprstvtp 2**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `BankPowerOfAttorneyUUID` | ✓ | |  |  |
| `BkPOAAuthzdRepresentativeUUID` | ✓ | |  |  |
| `BkPOAAuthzdRepresentative` |  | |  |  |
| `PaymentApproverGroup` |  | |  |  |
| `CreatedByUser` |  | |  |  |
| `CreationDateTime` |  | |  |  |
| `LastChangedByUser` |  | |  |  |
| `LocalLastChangeDateTime` |  | |  |  |
| `_BankPowerOfAttorney` | | ✓ | | |
| `_BusinessPartner` | | ✓ | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY

@EndUserText.label: 'Authorized Representatives of POA - TP'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{ modelingPattern:  #TRANSACTIONAL_INTERFACE,
               supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
               usageType: { serviceQuality: #B,
                            sizeCategory:   #S,
                            dataClass:      #MASTER },
               sapObjectNodeType.name: 'BkPOAAuthorizedRepresentative'}
@VDM: { lifecycle.contract.type: #PUBLIC_LOCAL_API,
        viewType: #TRANSACTIONAL }

@AbapCatalog.extensibility: {
  extensible: true,
  dataSources: [ 'AuthorizedRepresentative' ],
  elementSuffix: 'BPU',
  quota: { maximumFields: 100, maximumBytes: 100000 }
}
@AccessControl.personalData.blocking: #REQUIRED
@AbapCatalog.extensibility.allowNewCompositions

define view entity I_BkPOAAuthzdRprstvTP_2
  as projection on R_BkPOAAuthzdRepresentativeTP as AuthorizedRepresentative
{
  key BankPowerOfAttorneyUUID,
  key BkPOAAuthzdRepresentativeUUID,
      BkPOAAuthzdRepresentative,
      PaymentApproverGroup,
      @Semantics.user.createdBy: true
      CreatedByUser,
      @Semantics.systemDateTime.createdAt: true
      CreationDateTime,
      @Semantics.user.lastChangedBy: true
      LastChangedByUser,
      @Semantics.systemDateTime.localInstanceLastChangedAt: true
      LocalLastChangeDateTime,
      /* Associations */
      _BankPowerOfAttorney : redirected to parent I_BankPowerOfAttorneyTP_2,
      _BusinessPartner
}
```
